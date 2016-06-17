import React from 'react';
import App from './app.jsx';
import { render } from 'react-dom';

render(
  <App google={window.google} />,
  document.getElementById('app')
);
