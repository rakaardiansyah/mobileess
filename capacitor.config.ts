import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'my.id.rakaardiansyah',
  appName: 'Mobile ESS',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    Splashscreen:{
      launchAutoHide: true,
      launchShowDuration: 0
    }
  },
  cordova:{
    preferences:{
      LottieFullScreen: "true",
      LottieAutoHideSplashScreen: "true",
      LottieHideAfterAnimationEnd: "true",
      LottieScaleType: 'CENTER_INSIDE',
      LottieAnimationLocation: 'public/assets/splash.json',
      LottieHideTimeout: "3000"
    }
  }
};

export default config;
