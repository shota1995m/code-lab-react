import React, {Component} from 'react'
import {render} from 'react-dom'
import '../scss/components/snslinks.scss';

import {FaGithub, FaTwitter} from 'react-icons/fa'

export default class SnsLinks extends Component {
  render () {
    return <ul className="sns-link">
      <li>
        <a href="https://github.com/MiyahiraShota" target="_blank">
          <span className="i i-github"><FaGithub /></span>Shota
        </a>
      </li>
      <li>
        <a href="https://twitter.com/shota_tool" target="_blank">
          <span className="i i-twitter"><FaTwitter /></span>@shota_tool
        </a>
      </li>
    </ul>;
  }
}
