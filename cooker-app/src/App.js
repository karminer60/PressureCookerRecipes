
import './App.css';
import Home from './Home.js';
import {Switch, Route } from 'react-router-dom';
import AboutPage from './AboutPage';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home}/>
        
        <Route exact path="/about" component={AboutPage}/>
      

      </Switch>

    </div>
  );
}

export default App;
