CREATE OR ALTER PROCEDURE deleteUser(
  @userId VARCHAR (100)
  )
AS 
BEGIN
    DELETE FROM users WHERE userId=@userId
END