from flask import Flask, render_template, request, jsonify, redirect, url_for, session
from functools import wraps
import mysql.connector
from mysql.connector import Error
# import google.generativeai as genai
# import os

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  # Change this to a secure secret key

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

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

    except Error as e:
        print(f"Error initializing database: {e}")
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

@app.route('/')
def index():
    user_info = None
    if 'user_id' in session:
        connection = create_db_connection()
        if connection:
            try:
                cursor = connection.cursor(dictionary=True)
                query = "SELECT first_name, last_name FROM PersonalDetails WHERE id = %s"
                cursor.execute(query, (session['user_id'],))
                user_info = cursor.fetchone()
            finally:
                cursor.close()
                connection.close()
    return render_template('index.html', user=user_info)

@app.route('/login')
def login():
    if 'user_id' in session:
        return redirect(url_for('index'))
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login_post():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'success': False, 'message': 'No data provided'})

        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({'success': False, 'message': 'Email and password are required'})

        connection = create_db_connection()
        if connection is None:
            return jsonify({'success': False, 'message': 'Database connection error'})

        try:
            cursor = connection.cursor(dictionary=True)
            
            # Check if user exists and password matches
            query = "SELECT * FROM PersonalDetails WHERE email = %s AND password = %s"
            cursor.execute(query, (email, password))
            user = cursor.fetchone()

            if user:
                # Make sure 'id' exists in the result
                user_id = user.get('id') or user.get('ID')  # Try both 'id' and 'ID'
                if not user_id:
                    return jsonify({'success': False, 'message': 'Invalid user data'})

                session['user_id'] = user_id
                session['email'] = user['email']
                
                # Check if profile is completed
                profile_completed = user.get('profile_completed', False)
                if profile_completed:
                    return jsonify({'success': True, 'redirect': url_for('index')})
                else:
                    return jsonify({'success': True, 'redirect': url_for('complete_profile')})
            else:
                return jsonify({'success': False, 'message': 'Invalid email or password'})

        finally:
            cursor.close()

    except Error as e:
        print(f"Error during login: {e}")
        return jsonify({'success': False, 'message': 'Login failed: Database error'})
    except Exception as e:
        print(f"Unexpected error during login: {e}")
        return jsonify({'success': False, 'message': 'An unexpected error occurred'})
    finally:
        if 'connection' in locals() and connection and connection.is_connected():
            connection.close()

@app.route('/signup')
def signup():
    if 'user_id' in session:
        return redirect(url_for('index'))
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
        
        # Insert new user with profile_completed = False
        insert_query = """
        INSERT INTO PersonalDetails (email, password, first_name, last_name, profile_completed) 
        VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(insert_query, (email, password, firstName, lastName, False))
        connection.commit()

        return jsonify({'success': True, 'message': 'Registration successful! Please login to continue.'})

    except Error as e:
        print(f"Error during signup: {e}")
        return jsonify({'success': False, 'message': 'Registration failed'})
    finally:
        if 'connection' in locals() and connection.is_connected():
            cursor.close()
            connection.close()


@app.route('/query')
@login_required
def queries():
    return render_template('main_page.html')    

@app.route('/profile')
@login_required
def profile():
    return render_template("profile.html")

@app.route('/contact')
@login_required
def contact():
    return 'Hello, contact!'

@app.route('/complete_profile')
@login_required
def complete_profile():
    # Check if profile is already completed
    connection = create_db_connection()
    if connection:
        try:
            cursor = connection.cursor(dictionary=True)
            query = "SELECT profile_completed FROM PersonalDetails WHERE id = %s"
            cursor.execute(query, (session['user_id'],))
            user = cursor.fetchone()
            
            if user and user.get('profile_completed'):
                return redirect(url_for('index'))
        finally:
            cursor.close()
            connection.close()
    
    return render_template('complete_profile.html')

@app.route('/complete_profile', methods=['POST'])
@login_required
def complete_profile_post():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'success': False, 'message': 'No data provided'})

        # Extract form data
        phone = data.get('phone', '').strip()
        location = data.get('location', '').strip()
        farm_size = data.get('farm_size', '')
        soil_type = data.get('soil_type', '').strip()
        primary_crops = data.get('primary_crops', '').strip()
        irrigation_method = data.get('irrigation_method', '').strip()
        experience = data.get('experience', '').strip()
        farming_type = data.get('farming_type', '').strip()
        interests = data.get('interests', '').strip()

        # Validation
        required_fields = ['phone', 'location', 'farm_size', 'soil_type', 'primary_crops', 'irrigation_method', 'experience', 'farming_type']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'success': False, 'message': f'{field.replace("_", " ").title()} is required'})

        connection = create_db_connection()
        if connection is None:
            return jsonify({'success': False, 'message': 'Database connection error'})

        try:
            cursor = connection.cursor()
            
            # Update user profile
            update_query = """
            UPDATE PersonalDetails SET 
                phone = %s,
                location = %s,
                farm_size = %s,
                soil_type = %s,
                primary_crops = %s,
                irrigation_method = %s,
                experience = %s,
                farming_type = %s,
                interests = %s,
                profile_completed = %s
            WHERE id = %s
            """
            cursor.execute(update_query, (
                phone, location, farm_size, soil_type, primary_crops,
                irrigation_method, experience, farming_type, interests,
                True, session['user_id']
            ))
            connection.commit()

            return jsonify({'success': True, 'message': 'Profile completed successfully!'})

        finally:
            cursor.close()

    except Error as e:
        print(f"Error during profile completion: {e}")
        return jsonify({'success': False, 'message': 'Failed to complete profile. Please try again.'})
    except Exception as e:
        print(f"Unexpected error during profile completion: {e}")
        return jsonify({'success': False, 'message': 'An unexpected error occurred'})
    finally:
        if 'connection' in locals() and connection and connection.is_connected():
            connection.close()


# @app.route('/index')
# def index():
#     if 'user_id' not in session:
#         return redirect(url_for('login'))
#     return render_template('user_dashboard.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))

@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'success': False, 'message': 'No data provided'})

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        rating = data.get('rating')
        message = data.get('message', '').strip()

        # Validation
        if not name or not email or not rating or not message:
            return jsonify({'success': False, 'message': 'All fields are required'})

        if not (1 <= rating <= 5):
            return jsonify({'success': False, 'message': 'Rating must be between 1 and 5'})

        # Basic email validation
        if '@' not in email or '.' not in email:
            return jsonify({'success': False, 'message': 'Please enter a valid email address'})

        connection = create_db_connection()
        if connection is None:
            return jsonify({'success': False, 'message': 'Database connection error'})

        try:
            cursor = connection.cursor()
            
            # Insert feedback into database
            insert_query = """
            INSERT INTO feedback (name, email, rating, message) 
            VALUES (%s, %s, %s, %s)
            """
            cursor.execute(insert_query, (name, email, rating, message))
            connection.commit()

            return jsonify({'success': True, 'message': 'Thank you for your feedback!'})

        finally:
            cursor.close()

    except Error as e:
        print(f"Error during feedback submission: {e}")
        return jsonify({'success': False, 'message': 'Failed to submit feedback. Please try again.'})
    except Exception as e:
        print(f"Unexpected error during feedback submission: {e}")
        return jsonify({'success': False, 'message': 'An unexpected error occurred'})
    finally:
        if 'connection' in locals() and connection and connection.is_connected():
            connection.close()


if __name__ == '__main__':
    init_database()  # Initialize database and tables
    app.run(debug=True)