# ReservationSystem.Application

## NET Core + Angular
This project combines ASP.NET Core MVC .NET 5 and Angular 13.
The ClientApp directory contains the Angular 13 frontend application.
Also, in order to avoid issues with dotnet builds, ClientApp folder is excluded from the .NET Core project (so it is not visible on Visual Studio sln), but the angular application is configured for building and exporting production assets to 'wwwroot/dist'.
More information about angular configuration for .NET Core deployment, see the 'README.NET.md' in client app.