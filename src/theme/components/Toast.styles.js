import variable from '../variables/platform';
import colors from '../variables/colors';

const Toast = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingVertical: 20,
  minHeight: variable.platform === 'ios' ? 80 : 40,
}

const ToastText = {
  fontSize: variable.fontSizeBase,
  fontFamily: variable.fontFamily,
  fontWeight: '600'
}

const contentToast = {
  get toastPrimary() {
    return {
      ...Toast,
      backgroundColor: colors.brandPrimary
    }
  },
  get toastPrimaryColor() {
    return {
      ...ToastText,
      color: colors.inverseTextColor
    }
  },
  get toastSuccess() {
    return {
      ...Toast,
      backgroundColor: colors.brandSuccess
    }
  },
  get toastSuccessColor() {
    return {
      ...ToastText,
      color: colors.inverseTextColor
    }
  },
  get toastInfo() {
    return {
      ...Toast,
      backgroundColor: colors.brandInfo
    }
  },
  get toastInfoColor() {
    return {
      ...ToastText,
      color: colors.inverseTextColor
    }
  },
  get toastWarning() {
    return {
      ...Toast,
      backgroundColor: colors.brandWarning
    }
  },
  get toastWarningColor() {
    return {
      ...ToastText,
      color: colors.inverseTextColor
    }
  },
  get toastDanger() {
    return {
      ...Toast,
      backgroundColor: colors.brandDanger
    }
  },
  get toastDangerColor() {
    return {
      ...ToastText,
      color: colors.inverseTextColor
    }
  },
  get toastLight() {
    return {
      ...Toast,
      backgroundColor: colors.brandLight,
      borderTopWidth: variable.borderWidth,
      borderTopBottom: variable.borderWidth,
      borderTopColor: colors.brandDisabled,
      borderBottomColor: colors.brandDisabled
    }
  },
  get toastLightColor() {
    return {
      ...ToastText,
      color: colors.brandDark
    }
  },
  get toastDark() {
    return {
      ...Toast,
      backgroundColor: colors.brandDark,
    }
  },
  get toastDarkColor() {
    return {
      ...ToastText,
      color: colors.inverseTextColor
    }
  },
  get areaLeft() {
    return {
      flex: 1,
      paddingRight: 10
    }
  },
  get areaRight() {
    return {
      minWidth: 50,
    }
  }
}


export default contentToast;