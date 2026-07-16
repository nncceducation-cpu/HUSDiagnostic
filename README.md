# HUS Diagnostic — recreated web app

A faithful, modernized rebuild of the original **HUS Diagnostic** Android app
(package `com.husdiagnostic`, React Native, v1.0.0) as a React + Vite + Tailwind
web app — the source-of-truth for a Capacitor Android/iOS build and a PWA.

## What was reproduced (verbatim from the original)
- Disclaimer gate (full consensus-taskforce text)
- Home menu: Make the diagnosis · Definitions · Appendix · References · About Us
- The Step 1–4a decision wizard and the exact YES/NO branch + result mapping
- Definitions, the 8 appendix reference images, References, About Us links

## Run it
```
npm install
npm run dev      # local preview
npm run build    # production build in dist/
```

## IMPORTANT — verify before clinical/store use
The decision-tree logic and all clinical wording were reverse-engineered from the
original app's minified bundle. They must be checked against the source of truth by
the author (Dr Khorshid Mohammad) before anyone relies on them. See
`src/data/decisionTree.ts` and `src/data/content.ts` — every clinical string lives there.

## Not yet done (next steps)
- Capacitor wrap (`ios/`, `android/`), signing keystore, CI `.aab`, Play listing.
  Reuse the capacitor-app-publisher skill pipeline.
- Redraw the in-step ultrasound images (Image 1–7) — the originals are binary assets
  not recoverable as source; placeholders/notes are used where they appeared.
