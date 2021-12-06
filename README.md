# ReservationSystem

This solution implements a simple reservation system developed for technical evaluation purposes.

## Solution Structure

* ReservationSystem.Application ==> .NET 5 MVC Core Web Application (backend) + Angular 13 Client Application (frontend) (Presentation Layer)
* ReservationSystem.Business ==> .NET 5 Class Library (Business Logic Layer)
* ReservationSystem.Data ==> .NET 5 Class Library (Data Access Layer)
* ReservationSystem.Core ==> .NET 5 Class Library (Infrastructure Layer)
* ReservationSystem.Root ==> .NET 5 Class Library (Dependency Injection Layer)

For more details, see the README.md files on each project.


## Technologies and tools used
* Microsoft Visual Studio 2019 version 16.11.7
* Visual Studio Code 1.62.3
* .NET 5 / ASP.NET MVC Core
* Microsoft SQLServer 2016 (Installed with Visual Studio)
* EntityFramework (version 5.0.12 for Core, Design and SqlServer)
* Angular CLI version 13.0.3
* Node.js version 14.18.1
* npm version 6.14.15

## Status of the project (03-12-2021)
There are some pending development tasks:
* Client-side validation for inputs.
* Rating and adding reservations to favorites
* Internationalization with Angular.
* Sorting data in the list views by column.
* Some styling, web responsive issues and icons.
