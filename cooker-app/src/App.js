
import './App.css';
import Home from './Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
