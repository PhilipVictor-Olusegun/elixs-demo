@echo off
echo ==========================================
echo Change Display Name: O D G to CHRIS
echo ==========================================
echo.
echo This will change your account display name.
echo Your user folder will remain: C:\Users\O D G
echo.
pause

REM Get the current username
for /f "tokens=*" %%a in ('whoami') do set CURRENT_USER=%%a

echo.
echo Current user: %CURRENT_USER%
echo Changing display name to CHRIS...
echo.

REM Change the display name using wmic
wmic useraccount where name="O D G" set fullname="CHRIS"

if %errorlevel% == 0 (
    echo.
    echo ==========================================
    echo SUCCESS! Display name changed to CHRIS
    echo ==========================================
    echo.
    echo You may need to log out and log back in to see the change.
) else (
    echo.
    echo ==========================================
    echo ERROR: Could not change display name
    echo ==========================================
    echo Please run this script as Administrator
    echo Right-click the file and select "Run as administrator"
)

echo.
pause
