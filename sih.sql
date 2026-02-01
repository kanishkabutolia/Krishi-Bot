create database SIH;
use SIH;
-- Create table for personal details
CREATE TABLE PersonalDetails (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Insert dummy data
INSERT INTO PersonalDetails (email, password, first_name, last_name) VALUES
('john.doe@example.com', 'password123', 'John', 'Doe'),
('jane.smith@example.com', 'securePass456', 'Jane', 'Smith'),
('alex.jones@example.com', 'myPassword789', 'Alex', 'Jones'),
('maria.garcia@example.com', 'garcia@123', 'Maria', 'Garcia'),
('rohit.sharma@example.com', 'rohit#2025', 'Rohit', 'Sharma');
