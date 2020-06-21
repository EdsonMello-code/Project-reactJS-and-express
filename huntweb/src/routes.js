import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Products from './pages/products'

// To create routes 
const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Main}/>
    <Route path="/products/:ID" component={Products}/>
  </Switch>
  </BrowserRouter>
)

export default Routes