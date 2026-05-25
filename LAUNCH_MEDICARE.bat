@echo off
echo ========================================
echo   MEDICARE PROJECT - SMART LAUNCHER
echo ========================================
echo.

:: --- BACKEND ---
echo [*] Starting Backend...
start "MEDICARE BACKEND" cmd /k "cd backend && if not exist node_modules (echo Installing packages... && npm install) && npm run dev"

:: --- FRONTEND ---
echo [*] Starting Frontend...
start "MEDICARE FRONTEND" cmd /k "cd frontend && if not exist node_modules (echo Installing packages... && npm install) && npm run dev"

:: --- ADMIN ---
echo [*] Starting Admin Panel...
start "MEDICARE ADMIN" cmd /k "cd admin && if not exist node_modules (echo Installing packages... && npm install) && npm run dev"

echo.
echo ========================================
echo ✅ Launching initiated!
echo.
echo Please wait for the three windows to finish
echo starting their respective servers.
echo.
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:4000
echo Admin:    http://localhost:5174/5175
echo ========================================
pause
