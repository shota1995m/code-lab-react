import React, {Component} from 'react'
import {render} from 'react-dom'

import SnsLinks from './SnsLinks'

export default class Main extends Component {
  render () {
    return <div id="main">
      <div className="main-wrap">
        <div className="main-inner">
          <h1>code lab.</h1>
          <SnsLinks />
        </div>
      </div>
    </div>;
  }
}
