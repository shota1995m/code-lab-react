import React, {Component} from 'react'
import {render} from 'react-dom'
import { Link } from 'react-router-dom'

import menuJson from 'data/menu.json'

export default class Menu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      links: menuJson
    }
  }

  render () {
    return <nav className="menu">
      <ul>
      {this.state.links.map((v,k) => {
        return <li key={k}>
          <Link to={v['href']}>
          {v['icon'] && <img src={require(`../../../images/${v['icon']}`)} />}
            {v['name']}
          </Link>
          </li>
      })}
      </ul>
    </nav>;
  }
}
