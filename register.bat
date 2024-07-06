@echo off
setlocal

:: Prompt for the name
set /p newname=Enter the name for your CLI tool: || set newname=

:: Check if the user provided a name
if "%newname%"=="" (
  echo You did not enter a name. Exiting...
  pause
  exit /b 1
)

:: Call the Node.js script to update package.json with the new name
node resources/update-name.js %newname%

:: Link the package globally
npm link

echo CLI tool linked globally.
pause
