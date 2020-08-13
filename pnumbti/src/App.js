import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ResultPage from './pages/ResultPage/ResultPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/result">
          <ResultPage />
        </Route>
        <Route path="/question">
          <QuestionPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
