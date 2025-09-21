-- Add new columns to PersonalDetails table for complete profile
ALTER TABLE PersonalDetails 
ADD COLUMN IF NOT EXISTS profile_completed BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS phone VARCHAR(20),
ADD COLUMN IF NOT EXISTS location VARCHAR(200),
ADD COLUMN IF NOT EXISTS farm_size DECIMAL(5,2),
ADD COLUMN IF NOT EXISTS soil_type VARCHAR(100),
ADD COLUMN IF NOT EXISTS primary_crops TEXT,
ADD COLUMN IF NOT EXISTS irrigation_method VARCHAR(100),
ADD COLUMN IF NOT EXISTS experience VARCHAR(50),
ADD COLUMN IF NOT EXISTS farming_type VARCHAR(50),
ADD COLUMN IF NOT EXISTS interests TEXT;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profile_completed ON PersonalDetails(profile_completed);
CREATE INDEX IF NOT EXISTS idx_location ON PersonalDetails(location);
