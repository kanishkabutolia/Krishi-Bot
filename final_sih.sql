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

-- Create feedback table for storing user feedback
CREATE TABLE IF NOT EXISTS feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Add index for better performance
CREATE INDEX idx_feedback_email ON feedback(email);
CREATE INDEX idx_feedback_created_at ON feedback(created_at);

select * from feedback;

-- Add new columns to PersonalDetails table for complete profile
-- Add new columns to PersonalDetails table for complete profile
ALTER TABLE PersonalDetails 
  ADD COLUMN profile_completed BOOLEAN DEFAULT FALSE,
  ADD COLUMN phone VARCHAR(20),
  ADD COLUMN location VARCHAR(200),
  ADD COLUMN farm_size DECIMAL(5,2),
  ADD COLUMN soil_type VARCHAR(100),
  ADD COLUMN primary_crops TEXT,
  ADD COLUMN irrigation_method VARCHAR(100),
  ADD COLUMN experience VARCHAR(50),
  ADD COLUMN farming_type VARCHAR(50),
  ADD COLUMN interests TEXT;

-- Add indexes for better performance
CREATE INDEX  idx_profile_completed ON PersonalDetails(profile_completed);
CREATE INDEX  idx_location ON PersonalDetails(location);

select * from PersonalDetails;