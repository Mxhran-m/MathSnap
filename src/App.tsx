import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import Arena from './pages/Arena';

export default function App() {

  return (
   <>
   <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/arena" element={<Arena/>} />
       </Routes>
      </BrowserRouter>
   </>
  );
}