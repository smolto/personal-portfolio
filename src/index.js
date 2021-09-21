import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//GLOBAL CSS
import './index.css';
import 'src/shared/styles/root.css'
import 'src/shared/styles/text.css'
import 'src/shared/styles/landing.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
