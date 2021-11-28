# ClientApp. NET Core integration

## angular.json
The "outputPath" parameter was modified to the path "../wwwroot/dist", to export a production copy that Razor views can import in order to integrate Angular and NET Core.

## package.json
The node stored commands "build" and "watch" were modified and must be used from no on, when updating the frontend application. This way, NET Core can load and publish the changes.
