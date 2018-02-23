import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './About'
import NotFound from './NotFound'

const navItems = [{
  exact: true,
  label: 'Customers',
  to: '/',
  icon: 'group',
}, {
  label: 'Products',
  to: '/product',
  icon: 'local_grocery_store',
}, {
  label: 'Invoices',
  to: '/invoice',
  icon: 'local_mall',
}, {
  label: 'Page 3',
  to: '/page-3',
  icon: 'flight_land',
}]

class Index extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='*' component={NotFound} />
      </Switch>
    )
  }
}

export default Index
