# Krishi-Bot

An AI-powered agricultural assistant chatbot built with Flask and Google Gemini AI to help farmers with practical advice on crops, pest management, soil health, and more.

## Features

- **AI Chatbot**: Powered by Google Gemini AI for intelligent farming advice
- **User Authentication**: Secure login and signup system
- **User Profiles**: Complete profile management with farm details
- **Government Subsidies**: Information about agricultural subsidies
- **Feedback System**: Users can submit feedback and ratings

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Python 3.8 or higher
- MySQL Server
- A Google Gemini API key (for chatbot functionality)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Krishi-Bot/sih/Krishi-Bot
```

Replace `<repository-url>` with the URL of your forked repository or the original repository URL.

### 2. Install Python Dependencies

Install the required Python packages using pip:

```bash
pip install -r requirements.txt
```

Or if you're using Python 3:

```bash
pip3 install -r requirements.txt
```

### 3. Install and Configure MySQL

1. Download and install MySQL from: https://dev.mysql.com/downloads/mysql/
2. Remember the root password you set during installation

### 4. Database Setup

Import the database schema by running:

```bash
mysql -u root -p < final_sih.sql
```

Enter your MySQL root password when prompted.

Alternatively, you can use MySQL Workbench or phpMyAdmin to import the `final_sih.sql` file.

### 5. Configure the Application

Open `main.py` and update the following configurations:

#### Database Configuration

Update the `DB_CONFIG` dictionary with your MySQL credentials:

```python
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',  # Replace with your MySQL username
    'password': 'your_password',  # Replace with your MySQL password
    'database': 'SIH'  # Keep this as is
}
```

#### Google Gemini API Key

Configure your Gemini API key:

```python
genai.configure(api_key='your_gemini_api_key_here')
```

To get a Gemini API key, visit: https://makersuite.google.com/app/apikey

#### Secret Key

Update the Flask secret key for session management:

```python
app.secret_key = 'your_secure_secret_key_here'
```

## Running the Application

After completing the configuration, start the application:

```bash
python main.py
```

Or:

```bash
python3 main.py
```

The application will start on `http://localhost:5000` by default.

## Usage

1. Open your browser and navigate to `http://localhost:5000`
2. Create a new account using the Sign Up page
3. Complete your profile with farm details
4. Use the chatbot to get farming advice

## Project Structure

```
Krishi-Bot/
├── README.md
└── sih/
    └── Krishi-Bot/
        ├── main.py              # Main Flask application
        ├── requirements.txt     # Python dependencies
        ├── final_sih.sql        # Database schema
        ├── static/              # Static files (CSS, JS, images)
        └── templates/           # HTML templates
```

## Troubleshooting

### Common Issues

1. **Module not found errors**: Ensure all requirements are installed:
   ```bash
   pip install -r requirements.txt
   ```

2. **MySQL connection errors**:
   - Verify MySQL is running
   - Check your database credentials in `main.py`
   - Ensure the database was imported correctly

3. **Gemini API errors**:
   - Verify your API key is correct
   - Check your internet connection
   - The chatbot will fall back to heuristic responses if the API fails

4. **Port already in use**:
   - Change the port in `main.py`:
     ```python
     app.run(debug=True, port=5001)
     ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available for educational purposes.