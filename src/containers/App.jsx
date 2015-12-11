import React, { PropTypes, Component } from 'react'
import routes from '../routes/routes.jsx'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

const history = createBrowserHistory()

export default class App extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Router createElement={::this.createElement} history={history}>{routes}</Router>
    )
  }

  createElement(Component, props) {
    const nextProps = Object.assign({}, props, this.props)
    return <Component {...nextProps}/>
  }
}
