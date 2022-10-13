import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlankLayout from './layouts/BlankLayout';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlankLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
