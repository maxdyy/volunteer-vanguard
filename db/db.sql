-- Create user mySmartHomeUser with password mySmartHomePassword
CREATE USER 'vanguard' @'localhost' IDENTIFIED BY 'vanguard';

-- Create database mySmartHomeDB
CREATE DATABASE vanguard;

-- Grant all privileges on mySmartHomeDB.* to mySmartHomeUser@localhost
GRANT ALL PRIVILEGES ON vanguard.* TO 'vanguard' @'localhost';

-- Use mySmartHomeDB
USE vanguard;

-- CREATE TABLE
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT UNIQUE,
    PRIMARY KEY (id),
    name varchar(60) NOT NULL,
    userName varchar(60) NOT NULL UNIQUE,
    type ENUM(
        'Organization',
        'Volunteer',
        'Donor',
    ) NOT NULL,
    continent ENUM('North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia') NOT NULL,
    location ENUM('North America', 'South America', 'Europe', 'Middle East', 'Africa', 'SouthEast Asia', 'Asia', 'China', 'Australia', 'Pacific Islands') NOT NULL,
    country varchar(60) NOT NULL,
    city varchar(60),
    state varchar(60),
    address varchar(100),
    organizationName varchar(100) NOT NULL,
    volunteerInterest ENUM(
        'Companion Animal',
        'Family Planning',
        'Health Care',
        'Reproductive Health Care',
        'Wildlife Care',
        'Famine Relief',
        'Relgious',
        'Homelessness',
        'Disability Care',
        'Special Needs',
        'LGTBQIA',
        'Medical Care',
        'Women and Girls',
    ) NOT NULL,
    desiredContinent ENUM('North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia'),
    desiredLocation ENUM('North America', 'South America', 'Europe', 'Middle East', 'Africa', 'SouthEast Asia', 'Asia', 'China', 'Australia', 'Pacific Islands'),
    desiredCountry varchar(60),
    desiredCity varchar(60),
    )
);

CREATE TABLE organizations (
    id int NOT NULL AUTO_INCREMENT UNIQUE,
    PRIMARY KEY (id),
    organizationName varchar(100) NOT NULL,
    type ENUM(
        'Companion Animal',
        'Family Planning',
        'Health Care',
        'Reproductive Health Care',
        'Wildlife Care',
        'Famine Relief',
        'Relgious',
        'Homelessness',
        'Disability Care',
        'Special Needs',
        'LGTBQIA',
        'Medical Care',
        'Women and Girls',
    ) NOT NULL,
    continent ENUM('North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia') NOT NULL,
    location ENUM('North America', 'South America', 'Europe', 'Middle East', 'Africa', 'SouthEast Asia', 'Asia', 'China', 'Australia', 'Pacific Islands') NOT NULL,
    country varchar(60) NOT NULL,
    city varchar(60),
    state varchar(60),
    address varchar(100),
);

INSERT INTO
    users ()
VALUES
    ();

INSERT INTO
    users ()
VALUES
    ();

-- Show the table
SELECT
    *
FROM
    users;

-- Show the table
SELECT
    *
FROM
    organizations;