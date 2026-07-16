import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.khorshidmohammad.husdiagnostic',
  appName: 'HUS Diagnostic',
  webDir: 'dist',
  server: { androidScheme: 'https' },
};

export default config;
