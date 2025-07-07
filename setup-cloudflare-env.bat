@echo off
echo ========================================
echo   Cloudflare Environment Setup
echo ========================================
echo.
echo This script will help you set up environment variables
echo for Cloudflare cache purging.
echo.
echo You'll need:
echo 1. Zone ID (from Cloudflare Dashboard)
echo 2. API Token (with Zone:Cache Purge permissions)
echo.
pause
echo.

:zone_id
set /p CF_ZONE_ID="Enter your Cloudflare Zone ID: "
if "%CF_ZONE_ID%"=="" (
    echo Zone ID cannot be empty!
    goto zone_id
)

:api_token
set /p CF_API_TOKEN="Enter your Cloudflare API Token: "
if "%CF_API_TOKEN%"=="" (
    echo API Token cannot be empty!
    goto api_token
)

set /p CF_DOMAIN="Enter your domain (default: westernjewellers.lk): "
if "%CF_DOMAIN%"=="" set CF_DOMAIN=westernjewellers.lk

echo.
echo ========================================
echo   Environment Variables Set
echo ========================================
echo CF_ZONE_ID=%CF_ZONE_ID%
echo CF_API_TOKEN=%CF_API_TOKEN%
echo CF_DOMAIN=%CF_DOMAIN%
echo.
echo These variables are set for this session only.
echo To make them permanent, add them to your system environment variables.
echo.

:menu
echo ========================================
echo   What would you like to do?
echo ========================================
echo 1. Test cache purging
echo 2. Build and deploy with cache purge
echo 3. Build only (no cache purge)
echo 4. Exit
echo.
set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" goto test_purge
if "%choice%"=="2" goto deploy
if "%choice%"=="3" goto build_only
if "%choice%"=="4" goto exit
echo Invalid choice! Please enter 1-4.
goto menu

:test_purge
echo.
echo Testing cache purge...
npm run purge:cache
if %errorlevel% equ 0 (
    echo.
    echo ✅ Cache purge test successful!
) else (
    echo.
    echo ❌ Cache purge test failed!
    echo Check your Zone ID and API Token.
)
echo.
pause
goto menu

:deploy
echo.
echo Building and deploying with cache purge...
npm run deploy
if %errorlevel% equ 0 (
    echo.
    echo ✅ Deployment successful!
    echo Your site is now live with fresh cache.
) else (
    echo.
    echo ❌ Deployment failed!
    echo Check the error messages above.
)
echo.
pause
goto menu

:build_only
echo.
echo Building project...
npm run build
if %errorlevel% equ 0 (
    echo.
    echo ✅ Build successful!
    echo Run 'npm run purge:cache' to clear Cloudflare cache.
) else (
    echo.
    echo ❌ Build failed!
    echo Check the error messages above.
)
echo.
pause
goto menu

:exit
echo.
echo Thanks for using the Cloudflare setup script!
echo.
echo Remember to set these environment variables permanently:
echo setx CF_ZONE_ID "%CF_ZONE_ID%"
echo setx CF_API_TOKEN "%CF_API_TOKEN%"
echo setx CF_DOMAIN "%CF_DOMAIN%"
echo.
pause
exit /b 0