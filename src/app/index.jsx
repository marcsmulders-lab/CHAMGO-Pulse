import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router';
import Header from '../components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AppRouter />
  </React.StrictMode>
);
