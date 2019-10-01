import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { ViewPropTypes } from '../utils';

import theme from '../theme/components/Container.styles';

class Container extends Component {
  render() {
    return (
      <View 
        ref={c => (this._root = c)}
        {...this.props}
        style={theme}
      >
        {this.props.children}
      </View>
    );
  }
}

Container.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

export default Container;