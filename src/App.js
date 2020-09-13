import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//VIEWS
import Home from './views/Home';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

class Main extends Component {
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