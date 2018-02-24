import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './containers/App'

const router = (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
)

export default router
