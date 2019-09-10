import React, {Component} from 'react'
import {render} from 'react-dom'

import { TitleHeader } from 'components/Parts/containers'

import 'scss/components/about.scss';

export default class About extends Component {
  render () {
    return <section id="about">
      <TitleHeader
        title="About"
        bg={require("../images/lab_bg.jpg")}
        discription={`プロフィールとか書くところ`}
      />
      <div className="about-inner">
        <p>何か作る場所</p>
      </div>
    </section>;
  }
}
