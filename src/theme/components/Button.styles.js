import variable from '../variables/platform';

const btn = {
  paddingVertical: variable.buttonPadding,
  backgroundColor: variable.buttonPrimaryBg,
  borderRadius: variable.borderRadiusBase,
  borderColor: variable.buttonPrimaryBg,
  borderWidth: null,
  height: 45,
  flexDirection: 'row',
  elevation: 2,
  marginVertical: 4,
  shadowColor: variable.platformStyle === 'material' ? colors.brandDark : undefined,
  shadowOffset: variable.platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
  shadowOpacity: variable.platformStyle === 'material' ? 0.2 : undefined,
  shadowRadius: variable.platformStyle === 'material' ? 1.2 : undefined,
  alignItems: 'center',
  justifyContent: 'space-between'
};

const btnText = {
  fontFamily: variable.buttonFontFamily,
  marginLeft: 0,
  marginRight: 0,
  color: variable.inverseTextColor,
  fontWeight: '600',
  fontSize: variable.buttonTextSize,
  paddingHorizontal: 16,
  backgroundColor: 'transparent'
}

const btnBordered = {
  borderWidth: 1,
  backgroundColor: 'transparent',
  justifyContent: 'center',
}

const button = {
  // Themes
  buttonTransparent: {
    ...btn,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  buttonBorderedPrimary: {
    ...btn,
    ...btnBordered,
    borderColor: variable.buttonPrimaryBg
  },
  buttonPrimary: {
    ...btn,
    backgroundColor: variable.buttonPrimaryBg,
    justifyContent: 'center'
  },
  buttonPrimaryColor: {
    ...btnText,
    color: variable.buttonPrimaryColor,
  },
  buttonTransparentPrimary: {
    ...btnText,
    color: variable.buttonPrimaryBg
  },
  buttonBorderedSuccess: {
    ...btn,
    ...btnBordered,
    borderColor: variable.buttonSuccessBg
  },
  buttonSuccess: {
    ...btn,
    backgroundColor: variable.buttonSuccessBg,
    justifyContent: 'center'
  },
  buttonSuccessColor: {
    ...btnText,
    color: variable.buttonPrimaryColor
  },
  buttonTransparentSuccess: {
    ...btnText,
    color: variable.buttonSuccessBg
  },
  buttonBorderedInfo: {
    ...btn,
    ...btnBordered,
    borderColor: variable.buttonInfoBg
  },
  buttonInfo: {
    ...btn,
    backgroundColor: variable.buttonInfoBg,
    justifyContent: 'center'
  },
  buttonInfoColor: {
    ...btnText,
    color: variable.buttonInfoColor
  },
  buttonTransparentInfo: {
    ...btnText,
    color: variable.buttonInfoBg
  },
  buttonBorderedWarning: {
    ...btn,
    ...btnBordered,
    borderColor: variable.buttonWarningBg
  },
  buttonWarning: {
    ...btn,
    backgroundColor: variable.buttonWarningBg,
    justifyContent: 'center'
  },
  buttonWarningColor: {
    ...btnText,
    color: variable.buttonWarningColor
  },
  buttonTransparentWarning: {
    ...btnText,
    color: variable.buttonWarningBg
  },
  buttonBorderedDanger: {
    ...btn,
    ...btnBordered,
    borderColor: variable.buttonDangerBg
  },
  buttonDanger: {
    ...btn,
    backgroundColor: variable.buttonDangerBg,
    justifyContent: 'center'
  },
  buttonDangerColor: {
    ...btnText,
    color: variable.buttonDangerColor
  },
  buttonTransparentDanger: {
    ...btnText,
    color: variable.buttonDangerBg
  },
  buttonBorderedDark: {
    ...btn,
    ...btnBordered,
    borderColor: variable.buttonDarkBg
  },
  buttonDark: {
    ...btn,
    backgroundColor: variable.buttonDarkBg,
    justifyContent: 'center',
  },
  buttonDarkColor: {
    ...btnText,
    color: variable.buttonDarkColor
  },
  buttonTransparentDark: {
    ...btnText,
    color: variable.buttonDarkBg
  },
  buttonBorderedDisabled: {
    ...btn,
    ...btnBordered,
    borderColor: variable.buttonDisabledBg
  },
  buttonDisabled: {
    ...btn,
    backgroundColor: variable.buttonDisabledBg,
    justifyContent: 'center'
  },
  buttonDisabledColor: {
    ...btnText,
    color: variable.buttonDisabledColor
  },
  buttonLink: {
    ...btn,
    backgroundColor: 'transparent'
  },  
  buttonLinkColor: {  
    ...btnText,
    color: variable.buttonLinkColor
  },

  // Size
  buttonSmall: {
    height: 30
  },
  buttonLarge: {
    height: 60
  }
}

export default button;
