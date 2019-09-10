import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import 'scss/style.scss'

import { Header } from 'components/Layout/Header/containers'
import Top from 'components/Top'
import { Lab } from 'components/Lab/containers'
import About from 'components/About'

export default class Router extends Component {
  render () {
    return <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Top} />
          <Route path='/lab' component={Lab} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>;
  }
}
