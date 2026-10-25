import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Mygoogle from './Mygoogle';

function App() {
  return (
    <div className="app-shell">
      <GoogleOAuthProvider clientId="839218157292-7muf3dfpt1tbld4fqs6k6ghddsqnh3qa.apps.googleusercontent.com">
        <Mygoogle />
      </GoogleOAuthProvider>
    </div>
  )
}

export default App