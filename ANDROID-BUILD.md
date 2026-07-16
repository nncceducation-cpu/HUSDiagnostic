# HUS Diagnostic — Android build & release

Package **com.husdiagnostic** · versionCode **305** · versionName **1.0.1**
(original was 304 / 1.0.0, so this supersedes it).

## How the build works
The web app (`src/`) is the source of truth. Capacitor wraps it into `android/`.
Store bundles are built in **GitHub Actions**, not locally (the Gradle release
build is memory-hungry — see the skill's gotchas).

## One-time setup
1. Push this project to a GitHub repo.
2. Install the GitHub CLI and log in: `gh auth login`.
3. From the repo folder, run **`set-android-secrets.bat`**. It loads four secrets
   from `certs/` into the repo:
   `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`.
   (The keystore and passwords never leave your machine except as encrypted GitHub secrets.)

## Build a signed bundle
- GitHub → **Actions** → **Android release (signed .aab + .apk)** → **Run workflow**.
- Optionally set versionCode/versionName. Download the **hus-diagnostic-android**
  artifact — it contains the signed `.aab` (for Play) and `.apk` (for sideloading).

## Signing key
- `certs/husdiagnostic-release.keystore` is your **upload key** (alias `husdiagnostic`),
  4096-bit RSA. It is **gitignored** — back it up somewhere safe. With Play App Signing
  on, losing it is recoverable via a Play Console key reset.

## Re-patching after regeneration
If you ever re-run `npx cap add/sync android`, run `python scripts/patch-android.py`
to re-apply SDK levels, AGP/Gradle versions, the signing config, and the version.

## IMPORTANT — reusing com.husdiagnostic on Play
Whether a fresh upload is accepted depends on the original listing:
- If the **original app is still in your Play account**: upload to that existing app;
  versionCode 305 > 304 is fine. BUT the new `.aab` must satisfy the app's signing —
  if the original did NOT use Play App Signing, Play expects the ORIGINAL key. If you
  don't have it, you'll need a Play-side upload-key reset.
- If the original was under a **different developer account** or fully removed: the
  package name may be reserved and you may need a new applicationId.
Tell your assistant which case applies and it can steer the Play steps.
