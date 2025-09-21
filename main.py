from flask import Flask, render_template, request, jsonify, redirect, url_for, session
from functools import wraps
import mysql.connector
from mysql.connector import Error
import google.generativeai as genai

# Configure Gemini API
genai.configure(api_key='AIzaSyBJxvh9nJGS__CrGqzNXQzibBom6zYAF24')
model = genai.GenerativeModel('gemini-2.5-flash')

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


@app.route('/chatbot')
def chatbot_page():
    return render_template('chatbot.html')


def get_fallback_reply(msg):
    """Provides heuristic-based replies as fallback when model fails"""
    msg = msg.lower()
    if any(k in msg for k in ['weather', 'rain', 'temperature']):
        return "You can check the local weather forecast — ensure timely irrigation based on expected rainfall."
    if any(k in msg for k in ['pest', 'disease', 'pesticide']):
        return "Identify the pest precisely before spraying; consider biocontrols and follow label instructions for pesticides."
    if any(k in msg for k in ['soil', 'ph', 'fertilizer']):
        return "Soil testing helps. Apply fertilizer based on nutrient deficiencies, and avoid over-application."
    if any(k in msg for k in ['hello', 'hi', 'hey']):
        return "Hello! Tell me what crop and issue you're facing, and I'll try to help."
    return "Thanks for your question. Could you share more details (crop, location, symptoms)?"

def clean_response(text):
    """Clean and format the model's response"""
    # Remove markdown symbols
    text = text.replace('*', '').replace('#', '').replace('`', '')
    
    # Split into lines and clean up
    lines = []
    in_list = False
    
    for line in text.split('\n'):
        line = line.strip()
        if not line:
            if not in_list:  # Add empty line between paragraphs
                lines.append('')
            continue
            
        # Handle bullet points
        if line.startswith('- ') or line.startswith('• '):
            if not in_list and lines:  # Add space before first list item
                lines.append('')
            line = '• ' + line[2:].strip()
            in_list = True
        # Handle numbered points
        elif line[0].isdigit() and '. ' in line:
            if not in_list and lines:  # Add space before first list item
                lines.append('')
            number = line.split('.')[0]
            rest = '.'.join(line.split('.')[1:]).strip()
            line = f"{number}. {rest}"
            in_list = True
        else:
            if in_list:  # Add space after last list item
                lines.append('')
            in_list = False
            
        lines.append(line)
    
    # Clean up double empty lines and ensure proper spacing
    cleaned_lines = []
    prev_empty = False
    
    for line in lines:
        if line.strip():
            cleaned_lines.append(line)
            prev_empty = False
        elif not prev_empty:  # Only add one empty line
            cleaned_lines.append('')
            prev_empty = True
    
    # Ensure text starts and ends cleanly
    while cleaned_lines and not cleaned_lines[0]:
        cleaned_lines.pop(0)
    while cleaned_lines and not cleaned_lines[-1]:
        cleaned_lines.pop()
        
    # Join with double line breaks for readability
    return '\n'.join(cleaned_lines)

def generate_reply_from_model(user_message):
    """Generate farming advice using Gemini AI with fallback to heuristics"""
    try:
        # Get user context if logged in
        user_context = ""
        if 'user_id' in session:
            connection = create_db_connection()
            if connection:
                try:
                    cursor = connection.cursor(dictionary=True)
                    query = """SELECT location, farm_size, soil_type, primary_crops, farming_type 
                             FROM PersonalDetails WHERE id = %s"""
                    cursor.execute(query, (session['user_id'],))
                    user = cursor.fetchone()
                    if user:
                        user_context = f"\nFarmer context: Location: {user['location']}, " \
                                     f"Farm size: {user['farm_size']}, Soil: {user['soil_type']}, " \
                                     f"Main crops: {user['primary_crops']}, Type: {user['farming_type']}"
                finally:
                    cursor.close()
                    connection.close()

        # Craft prompt with farming focus and structure requirements
        prompt = f"""You are KrishiBot, an expert agricultural assistant helping farmers with practical advice.
        
        Important: Format your response in clear paragraphs. If listing steps or points:
        • Use bullet points (•) for lists
        • Use numbers (1. 2. 3.) for sequential steps
        • Keep sentences short and clear
        • Skip any markdown formatting
        
        Farmer context:{user_context}
        
        Question: {user_message}
        
        Provide specific, actionable farming advice. If you need more details, ask focused questions about crops, conditions, or symptoms."""

        # Get response from Gemini
        response = model.generate_content(prompt)
        if response and response.text:
            # Clean and format the response
            return clean_response(response.text.strip())
        
        # Fallback to heuristics if model returns empty
        return get_fallback_reply(user_message)

    except Exception as e:
        print(f"Error calling Gemini API: {e}")
        # Fallback to rule-based replies on error
        return get_fallback_reply(user_message)


@app.route('/api/chat', methods=['POST'])
def api_chat():
    try:
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({'success': False, 'message': 'No message provided'}), 400

        user_message = data['message']

        # Here you would call your AI model. For now use the placeholder.
        reply = generate_reply_from_model(user_message)

        return jsonify({'success': True, 'reply': reply})
    except Exception as e:
        print('Error in /api/chat:', e)
        return jsonify({'success': False, 'message': 'Server error'}), 500


if __name__ == '__main__':
    init_database()  # Initialize database and tables
    app.run(debug=True)