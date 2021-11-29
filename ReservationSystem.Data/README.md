# ReservationSystem.Data
This projects contains the Data Access logic.

## Content
* DBContext
* Repositories
  - ReservationRepository
* Migrations

## Generating Migrations:
In order to create migrations, run this command from the ReservationSystem.Application project directory:
```
dotnet ef migrations add [MigrationName] --project ..\ReservationSystem.Data\ReservationSystem.Data.csproj --startup-project .\ReservationSystem.Application.csproj
```
After that, database should be generated on application startup with the updates made to the data model.