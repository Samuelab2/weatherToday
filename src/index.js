import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { GlobalStyle } from './utils/generalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);