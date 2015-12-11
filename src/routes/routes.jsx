import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from '../containers/Root.jsx'
import Page1 from '../containers/Page1.jsx'
import Page2 from '../containers/Page2.jsx'

export default (
  <Route path='/' component={Root}>
    <IndexRoute component={Page1} />
    <Route path='/page2' component={Page2} />
  </Route>
)
