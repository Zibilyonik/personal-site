import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-header">
          <Hero />    
        </div>
      </div>
    );
  }
}

export default App;
