import React, { PropTypes, Component } from 'react'
import { fetchData } from '../util/api'

export default class Page2 extends Component{

  constructor(props, context) {
    super(props, context)
    this.state = {
      audifono: props.audifono
    }
  }

  componentWillMount() {
    if(!this.state.audifono) {
      fetchData(this.props.location.pathname, result => {
        this.setState({
          audifono: result.audifono
        })
      })
    }
  }

  render() {
    const elements = this.state.audifono ? <h1>{this.state.audifono}</h1> : <span>Cargando...</span>

    return (
      <div>
        {elements}
        <button
          onClick={::this._handleBack}>
          Retroceder
        </button>
      </div>
    )
  }

  _handleBack() {
    this.props.history.goBack()
  }
}
