CREATE OR ALTER PROCEDURE getUserByEmail(
   @email VARCHAR (50)
)
AS 
BEGIN
SELECT * FROM users WHERE email=@email
END