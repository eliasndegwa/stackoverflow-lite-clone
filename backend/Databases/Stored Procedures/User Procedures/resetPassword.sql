USE [ecommerce]
GO
/****** Object:  StoredProcedure [dbo].[resetPassword]    Script Date: 22/05/2023 15:40:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER   PROCEDURE [dbo].[resetPassword](@email VARCHAR(50), @password VARCHAR(200))
AS
BEGIN UPDATE USERDB SET password=@password, resetEmailSent=1 WHERE email=@email
END