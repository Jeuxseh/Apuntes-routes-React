import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
import User from './pages/User'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* necesito poner mis rutas dentro del router para que funcione */}
        {/* organizamos las rutas "al revés" para que si hay coincidencia con la url sea capaz de cambiar (es por la / del home) */}
        {/* el switch nos soluciona que no se enseñen las dos rutas cuando voy a about (por la coincidencia) */}
        {/* si ponemos exact path no necesitamos el switch ya que es una funcion que solo hara render si la ruta coincide de forma exacta */}
        <Router>

          <Navbar />
          <Switch>

            <Route exact path="/about" component={About} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/user/:username" component={User} />
            <Route component={NoMatch} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
