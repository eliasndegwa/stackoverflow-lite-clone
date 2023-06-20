CREATE OR ALTER PROCEDURE insertQuestion(
	@questionId VARCHAR (100),
    @title VARCHAR(255),
    @body VARCHAR(MAX)
)
AS
BEGIN
INSERT INTO Questions(questionId,title,body)
VALUES(@questionId,@title,@body)
END