import React, { Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Contact from './Contact/Contact';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
        {/* Menu */}
        <Menu>Mentor</Menu>
        <Switch>
        <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
