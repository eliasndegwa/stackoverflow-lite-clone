CREATE TABLE users (
    userId VARCHAR (100) NOT NULL PRIMARY KEY,
    username VARCHAR(200)NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
	role VARCHAR(10) not null,
    password VARCHAR(200)NOT NULL,
	-- welcomeEmailSent int,
	-- resetPasswordSent int
);