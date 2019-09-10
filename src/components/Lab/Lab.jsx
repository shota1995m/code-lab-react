import React, {Component} from 'react'
import {render} from 'react-dom'

import Content from 'components/Parts/Content'
import { TitleHeader } from 'components/Parts/containers'

import 'scss/components/lab.scss';

export default class Lab extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return <section id="lab">
      <TitleHeader
        title="Lab"
        bg={require("../../images/lab_bg.jpg")}
        discription={`作ったものを置いておく場所。
動くものとは限らない。`}
      />
      <div className="lab-inner">
      <Content>
        <p>Lab</p>
      </Content>
      </div>
    </section>;
  }
}
