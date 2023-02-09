-- Create user mySmartHomeUser with password mySmartHomePassword
CREATE USER 'mySmartHomeUser' @'localhost' IDENTIFIED BY 'mySmartHomePassword';

-- Create database mySmartHomeDB
CREATE DATABASE mySmartHomeDB;

-- Grant all privileges on mySmartHomeDB.* to mySmartHomeUser@localhost
GRANT ALL PRIVILEGES ON mySmartHomeDB.* TO 'mySmartHomeUser' @'localhost';

-- Use mySmartHomeDB
USE mySmartHomeDB;

-- CREATE TABLE
CREATE TABLE devices (
    id int NOT NULL AUTO_INCREMENT UNIQUE,
    PRIMARY KEY (id),
    name varchar(255) NOT NULL UNIQUE,
    type ENUM(
        'lock',
        'blinds',
        'light',
        'ac',
        'radiator',
        'tv'
    ) NOT NULL,
    location ENUM('entrance', 'bedroom', 'livingroom', 'bathroom') NOT NULL,
    online boolean NOT NULL,
    unlocked boolean,
    temperature FLOAT,
    openPercentage TINYINT,
    volumePercentage TINYINT,
    fanSpeed ENUM('low', 'medium', 'high'),
    currentChannel INT
);

INSERT INTO
    devices (name, type, location, online)
VALUES
    ('device1', 'type1', 'bathroom', false);

INSERT INTO
    devices (name, type, location, online)
VALUES
    ('device2', 'type2', 'livingroom', true);

-- Show the table
SELECT
    *
FROM
    devices;