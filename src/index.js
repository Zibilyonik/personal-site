import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

const root = document.getElementById('root');
if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(<App />);
}