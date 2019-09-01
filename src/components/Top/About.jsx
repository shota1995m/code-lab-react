import React, {Component} from 'react'
import {render} from 'react-dom'
import 'scss/components/about.scss';

export default class About extends Component {
  render () {
    return <section id="about">
      <div class="about-inner">
        <p>何か作る場所</p>
      </div>
    </section>;
  }
}
