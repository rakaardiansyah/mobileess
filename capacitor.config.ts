import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'github/.com/rakaardiansyah',
  appName: 'Mobile ESS',
  webDir: 'rakaardiansyah.my.id/',
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
