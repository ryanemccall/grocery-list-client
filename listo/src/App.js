import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import GroceryListCreate from './components/GroceryListCreate';
import GroceryListGet from './components/GroceryListGet';
import GroceryListDelete from './components/GroceryListDelete';
import GroceryListUpdate from './components/GroceryListUpdate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Listo</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <GroceryListCreate/>
        <GroceryListGet />
        <GroceryListUpdate />
        <GroceryListDelete />
      </Router>
      
    </div>
  );
}

export default App;
