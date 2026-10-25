import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Admin from './component/Admin';
import ProtectedRoute from './component/ProtectedRouter';
import Registration from './component/Registration';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App