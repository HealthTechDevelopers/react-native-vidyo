//
//  VidyoLocalView.js
//  Black
//
//  Created by Martín Fernández on 6/13/17.
//
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent } from 'react-native'

class VidyoLocalView extends Component {
  static propTypes = {
    /**
     * Indicate if video feed is enabled.
     */
    enabled: PropTypes.bool.isRequired
  }

  render () {
    return <RCTTWLocalVideoView {...this.props}>{this.props.children}</RCTTWLocalVideoView>
  }
}

const RCTTWLocalVideoView = requireNativeComponent('RCTTWLocalVideoView', VidyoLocalView)

module.exports = VidyoLocalView