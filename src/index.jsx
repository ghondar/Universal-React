import React from 'react'
import { render } from 'react-dom'
import Saludo from './components/Saludo.jsx'

let props = {}

if(window.__DATA__)
  props = JSON.parse(window.__DATA__)

render(<Saludo {...props} />, document.getElementById('main'))
