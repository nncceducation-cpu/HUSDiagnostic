import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.husdiagnostic',
  appName: 'HUS Diagnostic',
  webDir: 'dist',
  server: { androidScheme: 'https' },
};

export default config;
