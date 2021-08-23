import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import HostPage from './HostPage'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/host">
            <HostPage />
          </Route>
        </Switch>

        <Footer />
      </ Router>
    </div>
  );
}

export default App;