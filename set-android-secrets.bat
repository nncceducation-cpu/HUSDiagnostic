@echo off
REM ============================================================
REM  Sets the GitHub Actions secrets needed to build & sign the
REM  HUS Diagnostic Android app. Run this from the repo folder.
REM  Requires the GitHub CLI (gh) to be installed and logged in:
REM      https://cli.github.com/   then:  gh auth login
REM ============================================================
setlocal
echo Setting Android signing secrets on the current repo...

REM --- KEYSTORE (base64 of certs\husdiagnostic-release.keystore) ---
gh secret set KEYSTORE_BASE64 < certs\keystore-base64.secret

REM --- Keystore + key password ---
set /p KSPASS=<certs\keystore-password.secret
echo|set /p="%KSPASS%"| gh secret set KEYSTORE_PASSWORD
echo|set /p="%KSPASS%"| gh secret set KEY_PASSWORD

REM --- Key alias ---
echo|set /p="husdiagnostic"| gh secret set KEY_ALIAS

echo.
echo Done. Verify with:  gh secret list
endlocal
