--BEGIN TRAN 
--IF EXISTS (
--       SELECT * FROM sys.procedures
--       WHERE NAME = 'spReservation_UpdateRanking'
--     )
--DROP PROCEDURE spReservation_UpdateRanking 
--GO
--CREATE PROCEDURE spReservation_UpdateRanking
--	@id int,
--	@rate int
--AS
--  DECLARE @ranking int, @count int;
--	SELECT @ranking=Ranking, @count=RatesCount FROM Reservation WHERE Reservation.Id=@id;
--RETURN 0

--EXEC spReservation_UpdateRanking @id=7, @rate=2;      

SELECT * FROM sys.procedures WHERE name='spReservation_UpdateRanking'