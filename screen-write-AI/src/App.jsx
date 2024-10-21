import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas'

function App() {

  return (
    <div className="p-8 static">
      <Sidebar />
      <Canvas />
    </div>
  );
}

export default App;