import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View
} from 'react-native';
import variable from '../theme/variables/platform';
import computeProps from '../utils/computeProps';
import bs from '../theme/components/Button.styles';

import Text from './Text';

const Button = props => {
  const initialStyle = () => {
    return {
      borderBtn: {
        borderWidth: props.bordered
          ? variable.buttonDefaultBorderWidth
          : undefined,
        borderRadius:
          props.rounded && props.bordered
            ? variable.borderRadiusLarge
            : variable.buttonDefaultBorderRadius
      }
    }
  }

  const rootProps = () => {
    const defaultProps = {
      style: initialStyle().borderBtn
    }

    if (Array.isArray(props.style)) {
      const flattenedStyle = props.style.reduce(
        (accumulator, currentValue) => accumulator.concat(currentValue),
        []
      );
      return computeProps(
        { ...props, style: flattenedStyle },
        defaultProps
      );
    }

    return computeProps(props, defaultProps);
  }

  const setStyleTheme = () => {
    if(props.success) return props.transparent ? bs.buttonTransparent : bs.buttonSuccess;
    if(props.info) return props.transparent ? bs.buttonTransparent : bs.buttonInfo;
    if(props.warning) return props.transparent ? bs.buttonTransparent : bs.buttonWarning;
    if(props.danger) return props.transparent ? bs.buttonTransparent : bs.buttonDanger;
    if(props.dark) return props.transparent ? bs.buttonTransparent : bs.buttonDark;
    if(props.disabled) return props.transparent ? bs.buttonTransparent : bs.buttonDisabled;
    if(props.link) return props.transparent ? bs.buttonTransparent : bs.buttonLink;
    
    return props.transparent ? bs.buttonTransparent : bs.buttonPrimary;
  }

  const setStyleSize = () => {
    if(props.small) return bs.buttonSmall;
    if(props.large) return bs.buttonLarge;
  }

  const setContentColor = () => {
    if(props.success) return props.transparent ? bs.buttonTransparentSuccess : bs.buttonSuccessColor;
    if(props.info) return props.transparent ? bs.buttonTransparentInfo : bs.buttonInfoColor;
    if(props.warning) return props.transparent ? bs.buttonTransparentWarning : bs.buttonWarningColor;
    if(props.danger) return props.transparent ? bs.buttonTransparentDanger : bs.buttonDangerColor;
    if(props.dark) return props.transparent ? bs.buttonTransparentDark : bs.buttonDarkColor;
    if(props.disabled) return bs.buttonDisabledColor;
    if(props.link) return bs.buttonLinkColor;

    return props.transparent ? bs.buttonTransparentPrimary : bs.buttonPrimaryColor;
  }

  const setBorderedTheme = () => {
    if(props.success) return props.bordered ? bs.buttonBorderedSuccess : undefined;
    if(props.info) return props.bordered ? bs.buttonBorderedInfo : undefined;
    if(props.warning) return props.bordered ? bs.buttonBorderedWarning : undefined;
    if(props.danger) return props.bordered ? bs.buttonBorderedDanger : undefined;
    if(props.dark) return props.bordered ? bs.buttonBorderedDark : undefined;
    if(props.disabled) return props.bordered ? bs.buttonBorderedDisabled : undefined;

    return props.bordered ? bs.buttonBorderedPrimary : undefined;
  }

  const setBorderedColor = () => {
    if(props.success) return props.bordered ? bs.buttonTransparentSuccess : undefined;
    if(props.info) return props.bordered ? bs.buttonTransparentInfo : undefined;
    if(props.warning) return props.bordered ? bs.buttonTransparentWarning : undefined;
    if(props.danger) return props.bordered ? bs.buttonTransparentDanger : undefined;
    if(props.dark) return props.bordered ? bs.buttonTransparentDark : undefined;
    if(props.disabled) return props.bordered ? bs.buttonTransparentDisabled : undefined;
    
    return props.bordered ? bs.buttonTransparentPrimary : undefined;
  }

  const children =
    Platform.OS === 'ios'
      ? props.children
      : React.Children.map(props.children, child => 
        child && child.type === Text
          ? React.cloneElement(child, {
            uppercase: variable.buttonUppercaseAndroidText,
            ...child.props
          })
          : child
      );
    if (
      Platform.OS === 'ios' || 
      Platform.Version < 21
    ) {
      return (
        <TouchableOpacity
          {...rootProps()}
          activeOpacity={
            props.activeOpacity > 0
              ? props.activeOpacity
              : variable.buttonDefaultActiveOpacity
          }
          style={[
            setStyleTheme(),
            setStyleSize(),
            props.rounded ?
              {
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30
              }
            : props.full ?
              {
                borderRadius: 0
              }
            : props.bordered ?
              setBorderedTheme()
            : undefined
          ]}
        >
          { 
            children || 
            <Text 
              style={[
                setContentColor(),
                props.bordered 
                  ? setBorderedColor()
                  : undefined
              ]}
              uppercase={props.uppercase}
            >
              {props.content}
            </Text> 
          }
        </TouchableOpacity>
      )
    }

  return (
    <TouchableNativeFeedback
      ref={c => (_root = c)}
      onPress={props.onPress}
      background={
        props.transparent
          ? TouchableNativeFeedback.Ripple('transparent')
          : TouchableNativeFeedback.Ripple(
              variable.androidRippleColor,
              false
            )
      }
      {...rootProps()}
    >
      <View {...rootProps()}>{children}</View>
    </TouchableNativeFeedback>
  );
}

Button.propTypes = {
  ...TouchableOpacity.prototypes,
  content: PropTypes.string,
  uppercase: PropTypes.bool,
  style: PropTypes.object,
  full: PropTypes.bool,
  block: PropTypes.bool,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  active: PropTypes.bool
}

export default Button;
