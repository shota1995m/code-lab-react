import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import 'scss/style.scss'

import Header from 'components/Layout/Header/Header'
import Top from 'components/Top'
import Lab from 'components/Lab'
import About from 'components/About'

class App extends Component {
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

render(<App/>, document.getElementById('app'));
