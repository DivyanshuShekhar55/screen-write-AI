import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas'
import ChatWindow from './components/ChatWindow';
import MainLayout from './components/MainLayout';

function App() {
  const [isvanishModeActive, setIsvanishModeActive] = useState(true)
  const [isWindowOpen, setIsWindowOpen] = useState(false)

  return (
    <div className="p-8 static">
      <Canvas VanishMode={isvanishModeActive} />
      <Sidebar changeMode={() => setIsvanishModeActive(!isvanishModeActive)} />

      <ChatWindow />
    </div>
  );
}

export default App;