import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Navbar /> 
      <header className="App-header">
      <h1>Bienvenido a SquadTech Analytics</h1>
      </header>
      <main>
        <button onClick={() => alert('¡Hola, mundo!')}>Haz clic aquí</button>
      </main>
      <Footer />
      
    </div>
  );
}

export default App;

