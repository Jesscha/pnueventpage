import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResultPage from './pages/ResultPage/ResultPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/result/:mbti">
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
    </div>
  );
}

export default App;
