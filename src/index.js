import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css';

import Landing from './pages/Landing';
import App from './App';
import Borrow from './pages/Borrow';
import CreateAccount from './pages/CreateAccount'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Landing />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </>
);

