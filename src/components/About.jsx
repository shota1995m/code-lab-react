import React, {Component} from 'react'
import {render} from 'react-dom'
import 'scss/components/about.scss';

export default class About extends Component {
  render () {
    return <section id="about">
      <div className="about-inner">
        <p>何か作る場所</p>
      </div>
    </section>;
  }
}
