import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import contentText from '../theme/components/Text.styles';

const Text = props => {
  const {
    uppercase,
    children
  } = props;

  let text;
  if(uppercase){
    text = React.Children.map(children, child => {
      if(_.isString(child)){
        return _.toUpper(child);
      }

      return child;
    });
  }else{
    text = children;
  }

  return (
    <RNText 
      style={contentText}
      {...props}
    >
      { text }
    </RNText>
  )
}

Text.propTypes = {
  ...RNText.propTypes,
  uppercase: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
}

Text.defaultProps = {
  uppercase: false
}

export default Text;
