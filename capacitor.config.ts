import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'prueba1',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, 
      launchAutoHide: true,
      backgroundColor: "#ffffffff", 
      abdroidScaleType: 'CENTER_CROP',
      androidSplashResourceName: "splash",
      showSpinner: false, 
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: 'launch_screen'
    }
  }
};

export default config;
