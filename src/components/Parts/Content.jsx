import React, { Component } from 'react'

export default class Content extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return <section className="content">
      {this.props.children}
    </section>;
  }
}
