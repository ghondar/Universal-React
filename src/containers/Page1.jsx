import React, { PropTypes, Component } from 'react'
import { fetchData } from '../util/api'

export default class Page1 extends Component{

  constructor(props, context) {
    super(props, context)
    this.state = {
      celular: props.celular
    }
  }

  componentWillMount() {
    if(!this.state.celular) {
      fetchData(this.props.location.pathname, result => {
        this.setState({
          celular: result.celular
        })
      })
    }
  }

  render() {
    const elements = this.state.celular ? <h1>{this.state.celular}</h1> : <span>Cargando...</span>
    return (
      <div>
        {elements}
        <button
          onClick={::this._handleGo}>
          Avanzar
        </button>
      </div>
    )
  }

  _handleGo() {
    this.props.history.push('/page2')
  }
}
