import React, { useState, useRef, useEffect } from 'react'

function Canvas({ VanishMode }) {
    const VANISH_TIME = VanishMode ? 3500 : Infinity
    // REFACTOR : NOT SURE IF MOST OPTIMAL WAY
    const CHECK_EXPIRE_DURATION = 750; // ms

    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [shapes, setShapes] = useState([]);
    const currentShapeRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        setCanvasProperties(ctx);
        ctxRef.current = ctx;
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            if (isDrawing) return;

            setShapes((prevShapes) => {
                const currentTime = Date.now();

                const remainingShapes = prevShapes.filter(
                    (shape) => currentTime - shape.timestamp < VANISH_TIME
                );

                if (remainingShapes.length !== prevShapes.length) {

                    drawAllShapes(remainingShapes);
                }

                return remainingShapes;
            });
        }, CHECK_EXPIRE_DURATION);

        return () => clearInterval(interval);
    }, [isDrawing]);


    const setCanvasProperties = (ctx) => {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "magenta";
        ctx.lineWidth = 4;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(255, 0, 255, 0.2)";
    };

    const startDrawing = (e) => {
        const ctx = ctxRef.current;
        setCanvasProperties(ctx);
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
        currentShapeRef.current = [{ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }];
    };

    const endDrawing = () => {
        if (currentShapeRef.current && currentShapeRef.current.length > 1) {
            const newShape = {
                points: currentShapeRef.current,
                timestamp: Date.now()
            };
            setShapes((prevShapes) => {
                const updatedShapes = [...prevShapes, newShape];
                drawAllShapes(updatedShapes);
                return updatedShapes;
            });
        }
        setIsDrawing(false);
        currentShapeRef.current = null;
        ctxRef.current.closePath();
    };

    const draw = (e) => {
        if (!isDrawing) return;

        const newPoint = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
        const ctx = ctxRef.current;
        ctx.lineTo(newPoint.x, newPoint.y);
        ctx.stroke();
        currentShapeRef.current.push(newPoint);
    };

    const drawAllShapes = (shapesToDraw) => {
        const ctx = ctxRef.current;
        const canvas = canvasRef.current;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        shapesToDraw.forEach((shape) => {
            setCanvasProperties(ctx); // Ensure neon effect for each shape
            ctx.beginPath();
            shape.points.forEach((point, index) => {
                if (index === 0) {
                    ctx.moveTo(point.x, point.y);
                } else {
                    ctx.lineTo(point.x, point.y);
                }
            });

            ctx.stroke();

        });
    };

    return (
        <div className="">
            <canvas
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                ref={canvasRef}
                width={1600}
                height={600}
            />
        </div>
    )
}

export default Canvas
