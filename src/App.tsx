import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/" render={() => <TodosPage />} exact />
        </Switch>
      </div>
    </>
  );
}

export default App;
