
import './App.css';
import Home from './Home.js';
import {Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/">
          <Home/>
        </Route>

        {/* <Route path="/Recipe">
          <Recipe/>
        </Route> */}

      </Switch>

    </div>
  );
}

export default App;
