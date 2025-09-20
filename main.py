from flask import Flask, render_template, request, jsonify, redirect, url_for, session
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  # Change this to a secure secret key

# MySQL Configuration
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',  # Replace with your MySQL username
    'password': 'root',  # Replace with your MySQL password
    'database': 'SIH'  # Replace with your database name
}

def create_db_connection():
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        return connection
    except Error as e:
        print(f"Error connecting to MySQL: {e}")
        return None

def init_database():
    try:
        connection = create_db_connection()
        if connection is None:
            return

        cursor = connection.cursor()

        # Create users table if it doesn't exist
        # create_users_table = """
        # CREATE TABLE IF NOT EXISTS users (
        #     id INT AUTO_INCREMENT PRIMARY KEY,
        #     email VARCHAR(255) UNIQUE NOT NULL,
        #     password VARCHAR(255) NOT NULL,
        #     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        # )
        # """
        # cursor.execute(create_users_table)
        # connection.commit()

    except Error as e:
        print(f"Error initializing database: {e}")
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/SignUp')
def signup():
    return render_template('signup.html')

@app.route('/signup', methods=['POST'])
def signup_post():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        firstName = data.get('firstName')
        lastName = data.get('lastName')

        connection = create_db_connection()
        if connection is None:
            return jsonify({'success': False, 'message': 'Database connection error'})

        cursor = connection.cursor(dictionary=True)
        
        # Check if user already exists
        check_query = "SELECT * FROM PersonalDetails WHERE email = %s"
        cursor.execute(check_query, (email,))
        if cursor.fetchone():
            return jsonify({'success': False, 'message': 'Email already registered'})
        
        # Insert new user
        insert_query = """
        INSERT INTO PersonalDetails (email, password, first_name, last_name) 
        VALUES (%s, %s, %s, %s)
        """
        cursor.execute(insert_query, (email, password, firstName, lastName))
        connection.commit()

        return jsonify({'success': True, 'message': 'Registration successful'})

    except Error as e:
        print(f"Error during signup: {e}")
        return jsonify({'success': False, 'message': 'Registration failed'})
    finally:
        if 'connection' in locals() and connection.is_connected():
            cursor.close()
            connection.close()

@app.route('/login', methods=['POST'])
def login_post():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')  # In production, use proper password hashing

        connection = create_db_connection()
        if connection is None:
            return jsonify({'success': False, 'message': 'Database connection error'})

        cursor = connection.cursor(dictionary=True)
        
        # Check if user exists and password matches
        query = "SELECT * FROM PersonalDetails WHERE email = %s AND password = %s"
        cursor.execute(query, (email, password))
        user = cursor.fetchone()

        if user:
            session['user_id'] = user['id']
            session['email'] = user['email']
            return jsonify({'success': True, 'redirect': url_for('main_page')})
        else:
            return jsonify({'success': False, 'message': 'Invalid email or password'})

    except Error as e:
        print(f"Error during login: {e}")
        return jsonify({'success': False, 'message': 'Login failed'})
    finally:
        if 'connection' in locals() and connection.is_connected():
            cursor.close()
            connection.close()

@app.route('/queries')
def queries():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    return 'Hello, queries!'

@app.route('/profile')
def profile():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    return 'Hello, profile!'

@app.route('/contact')
def contact():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    return 'Hello, contact!'

@app.route('/main_page')
def main_page():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    return render_template('main_page.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))


if __name__ == '__main__':
    init_database()  # Initialize database and tables
    app.run(debug=True)