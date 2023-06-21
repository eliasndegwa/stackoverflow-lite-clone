DROP TABLE IF EXISTS users
DROP TABLE IF EXISTS Questions;
DROP TABLE IF EXISTS Answers;
DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Tags;
DROP TABLE IF EXISTS QuestionTags;

create table Users(
  userId varchar(255),
  username varchar(255),
  email varchar(255) UNIQUE,
  password varchar(255),
  role varchar(255) default 'user',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  welcomeEmailSent BIT DEFAULT 0,
  primary key (userId)
 )

create table Questions(
    questionId varchar(255),
	userId varchar(255),
	title varchar(255),
	body varchar(1024),
	createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
	isPreffered Bit default 0,
	primary key (questionId)
)
 go

 create table Answers(
  answerId varchar(255),
  questionId varchar(255)  FOREIGN KEY REFERENCES Questions(questionId),
  userId varchar(255) FOREIGN KEY REFERENCES Users(userId),
  answer text,
  primary key (answerId)
 )

 go

 create table Tags(
  tagId varchar(255),
  tagname varchar(255),
  description varchar(255),
  isDeleted bit default 0,
   primary key (tagId)
 )

 go 
 create table TagsJoinQuestion(
 tagId varchar(255) FOREIGN KEY REFERENCES Tags(tagId),
 questionId varchar(255) FOREIGN KEY REFERENCES Questions(questionId)
 )
 go
create table Comments(
  commentId varchar(255),
  answerId varchar(255)  FOREIGN KEY REFERENCES Answers(answerId),
  userId varchar(255) FOREIGN KEY REFERENCES Users(userId),
  comment varchar(255),
  primary key (commentId)
)
go
create table Votes(
  voterId varchar(255),
  answerId varchar(255)  FOREIGN KEY REFERENCES Answers(answerId),
  userId varchar(255) FOREIGN KEY REFERENCES Users(userId),
  type bit,
  primary key (voterId)
)