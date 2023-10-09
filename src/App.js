import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';


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
