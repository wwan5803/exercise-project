import React, { Component } from 'react';
import './App.css';
import InteractiveRating from './components/interactiveRating';
import NonInteractiveRating from './components/noninteractiveRating'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InteractiveRating starRange={5} inActiveColor="#E3E6E9" activeColor="#4A90E2"/>
        <NonInteractiveRating starRange={5} starNumbers={4} inActiveColor="#E3E6E9" activeColor="#4A90E2"/>
      </div>
    );
  }
}

export default App;
