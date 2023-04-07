import React from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<Login />} /> 
        </Routes>
      </>
    </Router>
  )
}

export default App
