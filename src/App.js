import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project1 from './components/Projects/Project1';
import Project2 from './components/Projects/Project2';
import Project3 from './components/Projects/Project3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project-1" element={<Project1 />} />
          <Route path="/projects/project-2" element={<Project2 />} />
          <Route path="/projects/project-3" element={<Project3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;