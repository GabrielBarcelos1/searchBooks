import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/global.css'
import { BookProvider } from './providers/ContextBook'

ReactDOM.render(
  <React.StrictMode>
    <BookProvider>
      <App/>
    </BookProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

