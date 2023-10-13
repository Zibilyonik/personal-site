import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="App-header">
            <Hero />    
          </div>
          <Projects />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
