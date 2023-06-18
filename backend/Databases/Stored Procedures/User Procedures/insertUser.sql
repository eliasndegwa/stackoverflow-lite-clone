CREATE OR ALTER PROCEDURE insertUser(
	@user_id VARCHAR (100),
    @username VARCHAR(200),
    @email VARCHAR(50),
	--@email_sent int,
    @role VARCHAR(10),
    @password VARCHAR(200)
)
AS
BEGIN
INSERT INTO users (user_id,username,email,email_sent,role,password)
VALUES(@user_id,@username,@email,@email_sent,@role,@password)
END



select * from users






















 


