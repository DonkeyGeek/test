import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Community from './components/Community';
import Docs from './components/Docs';
import ErrorPage from './components/ErrorPage';
import Menu from './components/Menu';
import Tutorials from './components/Tutorials';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Docs} />
        <Route path="/tutorial" component={Tutorials} />
        <Route strict path="/community" component={Community} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
