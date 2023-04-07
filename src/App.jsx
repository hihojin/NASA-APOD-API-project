import React from 'react';
import Picture from './Picture';
import Login from './Login';
import Register from './Register';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/picture" element={<Picture />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<Login />} /> 
        </Routes>
      </>
    </Router>
  )
}

export default App
