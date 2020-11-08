import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Styles.css"
import Routes from './Routes';


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

