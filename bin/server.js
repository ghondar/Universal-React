import express from 'express'
import logger from 'morgan'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { fetchData } from '../src/util/api'

import Saludo from '../src/components/Saludo.jsx'

const app = express()
const server = require('http').createServer(app)
server.listen(3000)

app.set('views', './views')
app.set('view engine', 'jade')

app.use(logger('dev'))

app.get('*', (req, res) => {
  fetchData(req.originalUrl, apiResult => {

    const data = JSON.stringify(apiResult)

    const injectJS = `<script>window.__DATA__ = '${data}'</script>`

    const bundle = process.env.DEBUG ? 'http://localhost:8888/static/bundle.js' : '/static/bundle.js'

    const renderHTML = renderToString(<Saludo />)
    res.render('index', { renderHTML, bundle, injectJS })
  })
})
