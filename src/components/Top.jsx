import React, {Component} from 'react'
import {render} from 'react-dom'

import Main from './Main'
import About from './About'

export default class Top extends Component {
  render () {
    return <>
      <Main />
      <Main />
      <Main />
      <Main />
    </>;
  }
}
