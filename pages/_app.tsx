import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SideBar from '../components/SideBar';

import Home from './Home';
import Walks from './Home';
import Informations from './Home';

const _app: React.FC = () => {
  return (
    <>
      <Router>
        <SideBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Walks} />
          <Route path='/products' component={Informations} />
        </Switch>
      </Router>
    </>
  )
}

export default _app
