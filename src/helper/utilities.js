// Utility functions
import {Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-safearea-height';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

// Fontsize comman function
export const fontSize = val => RFValue(val, 812);

// Device wise width count
export const wp = value => widthPercentageToDP((value * 100) / 375);

// Device wise height count
export const hp = value => heightPercentageToDP((value * 100) / 812);

// Get stautsbar height
export const statusBarHeight = getStatusBarHeight();

// Platform OS iOS/Android
export const isIos = Platform.OS === 'ios';
