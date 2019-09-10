import React, {Component} from 'react'
import {render} from 'react-dom'

import Menu from './Menu';

export default class Header extends Component {
  render () {
    return <div className="header">
      <Menu />
    </div>;
  }
}
