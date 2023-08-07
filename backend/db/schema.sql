DROP DATABASE IF EXISTS globe_trotter_dev;

CREATE DATABASE globe_trotter_dev;

\c globe_trotter_dev;


-- i want the user to be able to have their own table so that they can create their trotter player
CREATE TABLE user_player (
    id SERIAL PRIMARY KEY,
     position TEXT NOT NULL, -- ENUM ALLOWS FOR PREDEFINED DATA TYPES
    -- ENUM(fill with positions)
    height TEXT, -- VARCHAR(3)
    nickname TEXT,
    lastname TEXT NOT NULL,
    jersey_number INTEGER, 
);

-- the user is able to see the active roster but will not be able to change 
CREATE TABLE active_roster (
    id SERIAL PRIMARY KEY,
    position TEXT NOT NULL, -- ENUM ALLOWS FOR PREDEFINED DATA TYPES
    -- ENUM(fill with positions)
    height TEXT, -- VARCHAR(3)
    nickname TEXT,
    lastname TEXT NOT NULL,
    hometown TEXT,
    almamater TEXT,
    jersey_number INTEGER, 
    bio TEXT, 
    career_highlights TEXT,
    career_history TEXT,
    favorite_quote TEXT,
    hobbies TEXT
);

