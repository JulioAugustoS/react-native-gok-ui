import {
  Platform,
  Dimensions,
  PixelRatio
} from 'react-native';
import colors from './colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX = platform === 'ios' && 
  (deviceHeight === 812 || deviceWidth === 812 ||
    deviceHeight === 896 || deviceWidth === 896);

export default {
  platformStyle,
  platform,

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  buttonUppercaseAndroidText: true,

  // Button
  buttonFontFamily: platform === 'ios' ? 'System' : 'Roboto_medium',
  buttonDefaultBorderWidth: 1,
  buttonDefaultBorderRadius: 2,
  buttonDefaultFlex: 1,
  buttonDefaultActiveOpacity: 0.5,
  buttonPadding: 6,
  buttonDisabledBg: '#EDEFF4',

  get buttonPrimaryBg() {
    return colors.brandPrimary;
  },
  get buttonPrimaryColor() {
    return colors.inverseTextColor;
  },
  get buttonInfoBg() {
    return colors.brandInfo;
  },
  get buttonInfoColor() {
    return colors.inverseTextColor;
  },
  get buttonSuccessBg() {
    return colors.brandSuccess;
  },
  get buttonSuccessColor() {
    return colors.inverseTextColor;
  },
  get buttonWarningBg() {
    return colors.brandWarning;
  },
  get buttonWarningColor() {
    return colors.inverseTextColor;
  },
  get buttonDangerBg() {
    return colors.brandDanger;
  },
  get buttonDangerColor() {
    return colors.inverseTextColor;
  },
  get buttonDarkBg() {
    return colors.brandDark;
  },
  get buttonDarkColor() {
    return colors.inverseTextColor;
  },

  get buttonDisabledBg() {
    return colors.brandDisabled;
  },
  get buttonDisabledColor() {
    return colors.disabledTextColor;
  },
  get buttonLinkColor() {
    return colors.inverseTextColor;
  },

  get buttonTextSize() {
    return platform === 'ios'
      ? this.fontSizeBase * 1.1
      : this.fontSizeBase - 1;
  },
  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  // Font
  DefaultFontSize: 16,
  fontFamily: platform === 'ios' ? 'System' : 'Roboto',
  fontSizeBase: 15,

  // Other
  borderRadiusBase: platform === 'ios' ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21
    }
  }
}