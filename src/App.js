import React, { Component } from 'react';
import './App.css';
import Demonym from './demonym.js';
import CountrySelector from './countrySelector.js';

class App extends Component {
  render(){
    return (
      <div className="App">
        <CountrySelector />
        <Demonym />
      </div>
    );
  }
}

export default App;
