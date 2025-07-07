@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

:: Go to script location
cd /d %~dp0

:: Start MongoDB server
echo Starting MongoDB server...
start "MongoDB" cmd /k "cd backend && mongod --dbpath=.\data\db"

:: Wait a bit
timeout /t 2 > nul

:: Start backend server
echo Starting backend server...
start "Backend" cmd /k "cd backend && node app.js"

:: Wait a bit
timeout /t 2 > nul

:: Start frontend dev server
echo Starting frontend dev server...
start "Frontend" cmd /k "cd frontend && npm run dev"

echo All servers started. Open http://localhost:5173 in your browser.
pause
