import React, { Component } from 'react';
import {
  View, 
  ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';

import { ToastContainer as Toast } from './ToastContainer';

class Root extends Component {
  render() {
    return (
      <View 
        ref={c => (this._root = c)}
        {...this.props}
        style={{ flex: 1 }}
      >
        {this.props.children}
        <Toast
          ref={c => {
            console.log(c);
            if (c) Toast.toastInstance = c;
          }}
        />
      </View>
    );
  }
}

Root.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
}

export default Root;