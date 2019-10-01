import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import variable from '../theme/variables/platform';
import contentTheme from '../theme/components/Content.styles';

class Content extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        ref={c => {
          this._scrollview = c;
          this._root = c;
        }}
        style={[contentTheme, this.props.contentStyle]}
        behavior={variable.platform === 'ios' ? 'padding' : undefined}
        enabled
      >
        {this.props.children}
      </KeyboardAvoidingView>
    );
  }
}

export default Content;