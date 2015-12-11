import React from 'react'
import { render } from 'react-dom'
import App from './containers/App.jsx'

let props = {}

if(window.__DATA__)
  props = JSON.parse(window.__DATA__)

render(<App {...props} />, document.getElementById('main'))
