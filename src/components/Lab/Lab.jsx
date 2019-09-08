import React, {Component} from 'react'
import {render} from 'react-dom'

import Content from 'components/Parts/Content'

import 'scss/components/lab.scss';

export default class Lab extends Component {
  render () {
    return <section id="lab">
      <div className="lab-inner">
      <Content>
        <p>Lab</p>
      </Content>
      </div>
    </section>;
  }
}
