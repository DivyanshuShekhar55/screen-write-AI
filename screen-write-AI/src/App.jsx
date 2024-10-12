import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { useRef, useState, useEffect } from 'react';

function App() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "magenta";
    ctx.lineWidth = 0.5;
    ctxRef.current = ctx;

    ctx.shadowBlur = 7;  // Adds glow effect
    ctx.shadowColor = "rgba(255, 0, 255, 0.4)";  // Glow color
  }, []);

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    setIsDrawing(true);
  }; const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );

    ctxRef.current.stroke();
  };

  return (
    <div className='p-8 static'>
      <Sidebar />

      <div className=''>

      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        width="1600"
        height="600"
      />
      </div>
    </div>
  )
}

export default App
