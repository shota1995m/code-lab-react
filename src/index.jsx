import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import Router from './Router.jsx'
import reduxStore, { history } from './redux/store'

import 'scss/style.scss'

ReactDOM.render(
  <Provider store={reduxStore}>
  <ConnectedRouter history={history}>
  <Router />
  </ConnectedRouter>
  </Provider>
  ,document.getElementById('app')
)
