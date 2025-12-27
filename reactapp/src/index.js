import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoanProvider } from './context/LoanContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoanProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoanProvider>
);