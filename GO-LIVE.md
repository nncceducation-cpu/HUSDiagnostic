# HUS Diagnostic — go-live checklist

Run these in order from the `HUS-Diagnostic` folder.

## 1. Push the code
- Confirm the repo owner in `push-to-github.bat` (defaults to `nncceducation-cpu`).
- Double-click / run **`push-to-github.bat`**.
  (The signing keystore and passwords in `certs/` are gitignored and will NOT be pushed.)

## 2. Load the signing secrets
- Install GitHub CLI if needed (https://cli.github.com), then `gh auth login`.
- Run **`set-android-secrets.bat`**. Verify with `gh secret list` — you should see
  KEYSTORE_BASE64, KEYSTORE_PASSWORD, KEY_ALIAS, KEY_PASSWORD.

## 3. Build the signed bundle
- GitHub → **Actions** → **Android release (signed .aab + .apk)** → **Run workflow**.
- When it finishes, download the **hus-diagnostic-android** artifact
  (contains the signed `.aab` for Play and `.apk` for sideloading).

## 4. Play Console
- Create/prepare the listing, upload the `.aab`, complete the compliance forms,
  set up a **closed** testing track (not internal), then the 12-testers/14-day path.
- See the reused-package caveat in `ANDROID-BUILD.md` first.

## Reminders
- Back up `certs/husdiagnostic-release.keystore` somewhere safe (it's your upload key).
- Verify the clinical decision logic in `src/data/decisionTree.ts` before real use.
