import React, {Component} from 'react'
import {render} from 'react-dom'
import 'scss/style.scss'

import Top from 'components/Top/Top'

class App extends Component {
  render () {
    return <Top />;
  }
}

render(<App/>, document.getElementById('app'));
