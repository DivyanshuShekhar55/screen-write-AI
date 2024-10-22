import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas'

function App() {
  const [isvanishModeActive, setIsvanishModeActive] = useState(true)

  return (
    <div className="p-8 static">
      <Sidebar changeMode={() => setIsvanishModeActive(!isvanishModeActive)} />
      <Canvas VanishMode={isvanishModeActive} />
    </div>
  );
}

export default App;