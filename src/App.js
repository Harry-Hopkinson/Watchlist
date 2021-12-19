import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import "./lib/font-awesome/css/all.min.css";

import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path='/'>
          <Watchlist />
        </Route>

        <Route path='/watched'>
          <Watched />
        </Route>

        <Route path='/add'>
          <Add />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
