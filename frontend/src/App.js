// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Routes/Login';
import Home from './Routes/Home';
import ProtectedRoute from './Routes/ProtectedRoute';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={token ? "/home" : "/login"} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute token={token}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

