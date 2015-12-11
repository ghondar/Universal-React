import React, { PropTypes, Component } from 'react'

export default class Root extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
