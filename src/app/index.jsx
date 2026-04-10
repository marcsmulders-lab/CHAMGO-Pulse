import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRouter from './Router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '../theme/ThemeContext';
import { ToastProvider } from '../components/ToastProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <ThemeProvider>
        <Header />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </ToastProvider>
  </React.StrictMode>
);
