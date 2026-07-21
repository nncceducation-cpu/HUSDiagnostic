#!/usr/bin/env python3
"""Re-apply HUS Diagnostic Android settings after `npx cap add/sync android`.

Regenerating android/ resets these, so run this script every time. It:
  - bumps compile/target SDK to 35 (Play requirement; move to 36 before 31 Aug 2026)
  - pins AGP 8.7.3 + Gradle 8.9 (known-good pair)
  - injects a release signingConfig sourced from environment variables
  - sets versionCode / versionName from env (defaults preserve the reused package)
It self-verifies and exits non-zero if any expected change did not land.
"""
import os, re, sys, pathlib

ANDROID = pathlib.Path(__file__).resolve().parent.parent / "android"
TARGET_SDK = "36"
COMPILE_SDK = "36"
AGP_VERSION = "8.9.1"
GRADLE_VERSION = "8.11.1"
# Fresh package com.khorshidmohammad.husdiagnostic (new listing). Start at 1 / 1.0.0.
# Default to 305 / 1.0.1 so a republish supersedes the old binary; override via env.
VERSION_CODE = os.environ.get("ANDROID_VERSION_CODE", "1")
VERSION_NAME = os.environ.get("ANDROID_VERSION_NAME", "1.0.0")

def edit(path, subs, required=True):
    p = ANDROID / path
    txt = p.read_text()
    orig = txt
    for pat, repl in subs:
        txt = re.sub(pat, repl, txt)
    if required and txt == orig:
        print(f"  ! no change applied in {path}", file=sys.stderr)
    p.write_text(txt)
    return txt

# 1) variables.gradle: SDK levels
edit("variables.gradle", [
    (r"compileSdkVersion = \d+", f"compileSdkVersion = {COMPILE_SDK}"),
    (r"targetSdkVersion = \d+", f"targetSdkVersion = {TARGET_SDK}"),
])

# 2) root build.gradle: AGP
edit("build.gradle", [
    (r"com\.android\.tools\.build:gradle:[\d.]+", f"com.android.tools.build:gradle:{AGP_VERSION}"),
])

# 3) gradle wrapper version
edit("gradle/wrapper/gradle-wrapper.properties", [
    (r"gradle-[\d.]+-all\.zip", f"gradle-{GRADLE_VERSION}-all.zip"),
])

# 4) app/build.gradle: version + signing config
app_gradle = "app/build.gradle"
txt = (ANDROID / app_gradle).read_text()
txt = re.sub(r"versionCode \d+", f"versionCode {VERSION_CODE}", txt)
txt = re.sub(r'versionName "[^"]*"', f'versionName "{VERSION_NAME}"', txt)

signing_block = """
    signingConfigs {
        release {
            def ksPath = System.getenv("KEYSTORE_PATH")
            if (ksPath != null) {
                storeFile file(ksPath)
                storePassword System.getenv("KEYSTORE_PASSWORD")
                keyAlias System.getenv("KEY_ALIAS")
                keyPassword System.getenv("KEY_PASSWORD")
            }
        }
    }
"""
if "signingConfigs" not in txt:
    txt = re.sub(r"(android\s*\{)", r"\1" + signing_block, txt, count=1)
# attach release signing to release buildType
if "signingConfig signingConfigs.release" not in txt:
    txt = re.sub(r"(buildTypes\s*\{\s*release\s*\{)",
                 r"\1\n            signingConfig signingConfigs.release", txt, count=1)
(ANDROID / app_gradle).write_text(txt)

# ---- self-verify ----
checks = {
    "variables.gradle": [f"compileSdkVersion = {COMPILE_SDK}", f"targetSdkVersion = {TARGET_SDK}"],
    "build.gradle": [f"gradle:{AGP_VERSION}"],
    "gradle/wrapper/gradle-wrapper.properties": [f"gradle-{GRADLE_VERSION}-all.zip"],
    "app/build.gradle": [f"versionCode {VERSION_CODE}", f'versionName "{VERSION_NAME}"',
                          "signingConfigs", "signingConfig signingConfigs.release"],
}
ok = True
for path, needles in checks.items():
    content = (ANDROID / path).read_text()
    for n in needles:
        present = n in content
        print(f"  [{'ok' if present else 'FAIL'}] {path}: {n}")
        ok = ok and present
if not ok:
    sys.exit("patch-android: verification FAILED")
print(f"patch-android: OK (targetSdk {TARGET_SDK}, AGP {AGP_VERSION}, Gradle {GRADLE_VERSION}, "
      f"v{VERSION_NAME}/{VERSION_CODE})")
