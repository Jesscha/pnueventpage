import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResultPage from './pages/ResultPage/ResultPage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import Survey from './pages/Survey/Survey';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pnuu-생일로 알아보는 당신의 속마음</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta property="og:title" content="Pnuu-생일로알아보는 내 속마음" />
      </Helmet>
      <Router>
        <Switch>
          <Route path="/result/:mbti">
            <ResultPage />
          </Route>
          <Route path="/question">
            <QuestionPage />
          </Route>
          <Route path="/survey">
            <Survey />
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
