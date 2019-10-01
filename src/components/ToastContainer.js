import React, { Component } from 'react';
import {
  Keyboard,
  Platform,
  Animated,
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

import variable from '../theme/variables/platform';
import contentToast from '../theme/components/Toast.styles';

import Text from './Text';
import Button from './Button';
import Toast from './Toast';

class ToastContainer extends Component {
  static toastInstance;

  static show({ ...config }) {
    console.log('this.toastInstance', this.toastInstance);
    this.toastInstance.showToast({ config });
  }

  static hide() {
    if (this.toastInstance.getModalState()) {
      this.toastInstance.closeToast('functionCall');
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
      slideAnim: new Animated.Value(0),
      keyboardHeight: 0,
      isKeyboardVisible: false,
      modalVisible: false
    };

    this.keyboardDidHide = this.keyboardDidHide.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  getToastStyle() {
    return {
      position: 'absolute',
      opacity: this.props.animate === 'fade' ? this.state.fadeAnim : undefined,
      height: this.props.animate === 'slide' ? this.state.slideAnim : undefined,
      width: '100%',
      elevation: 9,
      paddingTop: this.state.position === 'top' ? this.getTop() : undefined,
      top: this.state.position === 'top' ? -this.getTop() : undefined,
      bottom: this.state.position === 'bottom' ? 0 : undefined
    };
  }

  getTop() {
    if (Platform.OS === 'ios') {
      if (this.state.isKeyboardVisible) {
        return this.state.keyboardHeight;
      }

      return 35;
    }
    return 0;
  }

  getButtonText(buttonText) {
    if (buttonText) {
      if (buttonText.trim().length === 0) {
        return undefined;
      }
      return buttonText;
    }
    return undefined;
  }

  getModalState() {
    return this.state.modalVisible;
  }

  keyboardDidHide() {
    this.setState({
      keyboardHeight: 0,
      isKeyboardVisible: false
    });
  }

  keyboardDidShow(e) {
    this.setState({
      keyboardHeight: e.endCoordinates.height,
      isKeyboardVisible: true
    });
  }

  showToast({ config }) {
    console.log(config)
    this.setState({
      modalVisible: true,
      text: config.text,
      buttonText: this.getButtonText(config.buttonText),
      type: config.type,
      position: config.position ? config.position : 'bottom',
      supportedOrientations: config.supportedOrientations,
      style: config.style,
      buttonTextStyle: config.buttonTextStyle,
      buttonStyle: config.buttonStyle,
      textStyle: config.textStyle,
      onClose: config.onClose
    });
    
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    
    if (config.duration !== 0) {
      const duration = config.duration > 0 ? config.duration : 1500;
      this.closeTimeout = setTimeout(
        this.closeToast.bind(this, 'timeout'),
        duration
      );
    }
    
    Animated.timing(this.state.slideAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  closeModal(reason) {
    this.setState({
      modalVisible: false
    });
    const { onClose } = this.state;
    if (onClose && typeof onClose === 'function') {
      onClose(reason);
    }
  }

  closeToast(reason) {
    clearTimeout(this.closeTimeout);
    Animated.timing(this.state.slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  setTextTheme() {
    const { type } = this.state;

    if(type === 'primary') return contentToast.toastPrimaryColor;
    if(type === 'success') return contentToast.toastSuccessColor;
    if(type === 'info') return contentToast.toastInfoColor;
    if(type === 'warning') return contentToast.toastWarningColor;
    if(type === 'danger') return contentToast.toastDangerColor;
    if(type === 'dark') return contentToast.toastDarkColor;
    if(type === 'light') return contentToast.toastLightColor;
  }

  render(){
    if (this.state.modalVisible) {
      return (
        <Animated.View 
          style={
            [
              this.getToastStyle(),
              {
                transform: [
                  {
                    translateY: this.state.slideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [this.state.position === 'top' ? -100 : 100, 0]
                    })
                  }
                ]
              }
            ]
          }
        >
          <Toast
            primary={this.state.type === 'primary'}
            success={this.state.type === 'success'}
            info={this.state.type === 'info'}
            warning={this.state.type === 'warning'}
            danger={this.state.type === 'danger'}
            dark={this.state.type === 'dark'}
            light={this.state.type === 'light'}
          >
            <View style={contentToast.areaLeft}>
              <Text style={[
                this.state.textStyle, 
                this.setTextTheme(),
                this.state.position === 'top'
                  ? { paddingTop: 20 } : undefined
              ]}>
                {this.state.text}
              </Text>
            </View>
            {this.state.buttonText && this.state.type !== 'light' && (
              <View style={contentToast.areaRight}>
                <Button
                  content={this.state.buttonText}
                  style={this.state.buttonStyle}
                  link
                  onPress={() => this.closeToast('user')}
                />
              </View>
            )}
          </Toast>
        </Animated.View>
      );  
    }

    return null;
  }
}

ToastContainer.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

export { ToastContainer };