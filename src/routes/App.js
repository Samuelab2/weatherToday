import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from '../components/NotFound';
import Home from '../pages/Home';
import Forecast from '../pages/Forecast';
import Weather from '../pages/Weather';
import ScrollToTop from '../utils/scrollTop'

const days = ['/Domingo', '/Lunes', '/Martes', '/Miercoles', '/Jueves', '/Viernes', '/Sabado']

const App = () => (
  <Router>
    <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/forecast' component={Forecast} />
        <Route exact path={days} component={Weather} />
        <Route component={NotFound} />
      </Switch>
  </Router>
);

export default App;
