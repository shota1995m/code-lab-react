import React, {Component} from 'react'
import {render} from 'react-dom'
import 'scss/components/menu.scss';

export default class Menu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      links: [
        {
          name: "Top",
          href: "#"
        },
        {
          name: "Lab",
          href: "#"
        },
        {
          name: "About",
          href: "#"
        }
      ]
    }
  }

  render () {
    return <nav className="menu">
      <ul>
      {this.state.links.map((v,k) => {
        return <li key={k}>
          <a href={v['href']}>{v['name']}</a>
          </li>
      })}
      </ul>
    </nav>;
  }
}
