import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourite from './components/Favourite';
import AllList from './components/AllList';
import Login from './components/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='Favourite' element={<Favourite />} />
      <Route path='alllist' element={<AllList />} />
    </Routes>
  </BrowserRouter>=
</>);