CREATE OR ALTER PROCEDURE updateUser(
    @userId VARCHAR (100),
    @username VARCHAR(200),
    @email VARCHAR(50)
)
AS
BEGIN

UPDATE users SET username= @username, email= @email
WHERE userId= @userId 

END