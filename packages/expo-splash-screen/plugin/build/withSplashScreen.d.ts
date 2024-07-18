import { AndroidPluginConfig } from '@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/getAndroidSplashConfig';
import { IOSPluginConfig } from '@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/getIosSplashConfig';
import { ConfigPlugin } from 'expo/config-plugins';
type PluginConfig = {
    backgroundColor: string;
    logoWidth: number;
    android: AndroidPluginConfig;
    ios: IOSPluginConfig;
};
declare const _default: ConfigPlugin<PluginConfig>;
export default _default;
