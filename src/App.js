import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import {API_LINK} from './components/Global/Variables';
import {NavigationBar, ChildNavigationBar} from './components/NavigationBar/NavigationBar';
import {Footer} from './components/Footer/Footer';

//VIEWS
import Home from './views/Home';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ChildNavigationBar/>
        <NavigationBar/>
        <Main />
        <Footer/>
      </div>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </main>
      )
  }
}

export default App;