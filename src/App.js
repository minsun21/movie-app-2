import React from 'react';
import './App.css';
import LandingPage from './components/views/LandingPage/LandingPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MovieDetail from './components/views/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/movie/:movieId" component={MovieDetail} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
