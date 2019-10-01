import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ViewPropTypes
} from 'react-native';

import contentToast from '../theme/components/Toast.styles';

class Toast extends Component {
  setToastTheme() {
    const {
      primary,
      danger,
      success,
      warning,
      info,
      light,
      dark
    } = this.props;

    if(primary) return contentToast.toastPrimary;
    if(success) return contentToast.toastSuccess;
    if(info) return contentToast.toastInfo;
    if(warning) return contentToast.toastWarning;
    if(danger) return contentToast.toastDanger;
    if(light) return contentToast.toastLight;
    if(dark) return contentToast.toastDark;
  }

  render() {
    return (
      <View 
        style={[contentToast, this.setToastTheme()]}
        ref={c => (this._root = c)} 
        {...this.props} 
      />
    );
  }
}

Toast.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

export default Toast;