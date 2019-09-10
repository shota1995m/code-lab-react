import React, { Component } from 'react'
import {render} from 'react-dom'

export default class TitleHeader extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      page_name: ""
    }
  }

  componentDidMount() {
    this.setState({page_name: this.props.match.path.slice(1)})
  }
  
  render () {
    return <div className="title-header">
      <div className={`title-header-inner ${this.state.page_name}`}>
      <h2>{ this.props.title }</h2>
      <p>{ this.props.discription }</p>
      </div>
      </div>
  }
}
