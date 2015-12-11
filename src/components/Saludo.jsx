import React, { PropTypes, Component } from 'react'

export default class Saludo extends Component{

  constructor(props, context) {
    super(props, context)
  }

  static defaultProps = {
    saludo: 'indefinido'
  }

  render() {
    return (
      <h1>{this.props.saludo}</h1>
    )
  }
}
