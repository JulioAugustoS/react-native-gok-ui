import { Platform } from 'react-native';

const colors = {
  // Container
  containerBgColor: '#ffffff',

  // Primary
  brandPrimary: Platform.OS === 'ios' ? '#6B76FF' : '#4B54CF',
  brandInfo: '#65C6C4',
  brandSuccess: '#7ED321',
  brandDanger: '#FF6071',
  brandWarning: '#FAC54E',
  brandDark: '#434F5F',
  brandLight: '#f4f4f4',
  brandDisabled: '#EDEFF4',

  // Text
  textColor: '#000000',
  inverseTextColor: '#ffffff',
  disabledTextColor: '#7D8692',
}

export default colors;