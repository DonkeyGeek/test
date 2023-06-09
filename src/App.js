import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Community from './components/Community';
import Docs from './components/Docs';
import ErrorPage from './components/ErrorPage';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Tutorials from './components/Tutorials';

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      underConst: {
        Docs: false,
        Tutorials: true,
        Community: false
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Docs} />
          <Route path="/tutorial" component={Tutorials} />
          <Route strict path="/community" component={Community} />
          <Route path="/users/:profilId" component={Profile} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;