# Web Application Setup Guide

This README provides step-by-step instructions to set up and run the web application.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Python 3.7 or higher
- MySQL Server

## Installation Steps

### 1. Install Python

Download and install Python from the official website: https://www.python.org/downloads/

Verify the installation by running:
```bash
python --version
```
or
```bash
python3 --version
```

### 2. Install Required Python Libraries

Navigate to the project directory and install the required dependencies using pip:

```bash
pip install -r requirements.txt
```

If you're using Python 3 specifically, you might need to use:
```bash
pip3 install -r requirements.txt
```

### 3. Install MySQL

Download and install MySQL from: https://dev.mysql.com/downloads/mysql/

During installation, remember the root password you set as you'll need it for configuration.

### 4. Database Setup

1. Locate the `sih.sql` file in the project directory
2. Import the database by running the following command in your terminal/command prompt:
   ```bash
   mysql -u root -p < sih.sql
   ```
   Enter your MySQL root password when prompted.

Alternatively, you can use MySQL Workbench or phpMyAdmin to import the `sih.sql` file.

### 5. Configure Database Connection

1. Open the `main.py` file in your preferred text editor
2. Locate the `db_config` function/section
3. Update the following parameters with your MySQL credentials:
   - `user`: Your MySQL username (typically 'root')
   - `password`: Your MySQL password
   - `host`: Usually 'localhost' or '127.0.0.1'
   
   **Important**: Do not change the database name in the configuration.

Example configuration:
```python
db_config = {
    'user': 'root',
    'password': 'your_mysql_password',
    'host': 'localhost',
    'database': 'existing_database_name'  # DO NOT CHANGE THIS
}
```

### 6. Run the Application

After completing all the above steps, run the application:

```bash
python main.py
```
or
```bash
python3 main.py
```

The application should start successfully. Check the terminal output for any error messages or the URL where the application is running (typically http://localhost:5000 or similar).

## Login Credentials

You can find the login credentials in the database. Connect to your MySQL database and check the appropriate user/login table to retrieve the username and password for accessing the application.

## Troubleshooting

### Common Issues:

1. **Module not found errors**: Ensure all requirements are installed using `pip install -r requirements.txt`

2. **MySQL connection errors**: 
   - Verify MySQL is running
   - Check your database credentials in `main.py`
   - Ensure the database was imported correctly

3. **Permission errors**: 
   - On Linux/Mac, you might need to use `sudo` for installations
   - Ensure you have proper permissions to access MySQL

4. **Port conflicts**: If the default port is occupied, check the application configuration for port settings

## Support

If you encounter any issues during setup, please check:
- Python and MySQL installation logs
- Database import success
- Configuration file syntax
- Required dependencies installation

For additional help, refer to the application documentation or contact the development team.
