import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Platform,
  View,
  Text
} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity>
      <Text>Button</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  ...TouchableOpacity.prototypes,
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
