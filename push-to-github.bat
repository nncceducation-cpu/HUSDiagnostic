@echo off
REM ============================================================
REM  Pushes HUS Diagnostic to your new GitHub repo.
REM  Run this ONCE from inside the HUS-Diagnostic folder.
REM  Requires Git installed and configured (user.name / user.email).
REM
REM  >>> If your repo owner is NOT "nncceducation-cpu", edit the
REM  >>> REPO line below before running.
REM ============================================================
setlocal
set REPO=https://github.com/nncceducation-cpu/HUSDiagnostic.git

echo Initializing git...
git init
git add .
git commit -m "HUS Diagnostic: recreated web app + Capacitor Android pipeline (v1.0.1/305)"
git branch -M main
git remote remove origin 2>nul
git remote add origin %REPO%
echo Pushing to %REPO% ...
git push -u origin main

echo.
echo If the push succeeded, next run:  set-android-secrets.bat
endlocal
