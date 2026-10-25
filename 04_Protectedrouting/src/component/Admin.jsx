import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('login');
    navigate('/login');
  };

  return (
    <div>
      <h1>Admin</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Admin;