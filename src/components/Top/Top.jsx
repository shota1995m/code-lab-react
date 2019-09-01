import React, {Component} from 'react'
import {render} from 'react-dom'

import Header from '../Layout/Header/Header'
import Main from './Main'
import About from './About'

export default class Top extends Component {
  render () {
    return <>
      <Header />
      <Main />
      <Main />
      <Main />
      <Main />
    </>;
  }
}
