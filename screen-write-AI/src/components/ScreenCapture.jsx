import React, { useState } from 'react'

function ScreenCapture() {
    const [selectStartPos, setSelectStartPos] = useState({ x: null, y: null })
    const [currPos, setCurrPos] = useState({ x: null, y: null })
    const [isDragging, setisDragging] = useState(false)

    const handleMouseDown = (e) => {
        const startX = e.clientX
        const startY = e.clientY
        setSelectStartPos({x:e.clientX, y:e.clientY})
        setisDragging(true)
    }

    const handleDrag = (e) => {
        if (isDragging) {
            setCurrPos({ x: e.clientX, y: e.clientY })
        }
    }

    const handleMouseUp = () => {
        setisDragging(false)
        alert(`started at ${selectStartPos.x} ended at ${currPos.x}`)
    }


    return (

        <div 
            className='w-3/4 h-3/4 bg-pink-400 cursor-crosshair' 
            onMouseDown={handleMouseDown}
            onMouseMove={handleDrag}
            onMouseUp={handleMouseUp}
            // Add more event handlers as needed
        >
            {isDragging && selectStartPos.x !== null && currPos.x !== null && (
                <div 
                    style={{
                        position: 'fixed',
                        left: Math.min(selectStartPos.x, currPos.x),
                        top: Math.min(selectStartPos.y, currPos.y),
                        width: Math.abs(currPos.x - selectStartPos.x),
                        height: Math.abs(currPos.y - selectStartPos.y),
                        border: '2px solid #00ff00',
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                        pointerEvents: 'none'  // Prevents the rectangle from interfering with events
                    }}
                />
            )}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui nemo temporibus earum consequuntur nobis ipsa dolorum non provident eaque sunt, omnis enim dolorem, aspernatur maiores laboriosam. Assumenda ducimus odit eum ipsam, a distinctio laborum animi soluta numquam. Velit dolorum itaque eum dicta deserunt quos harum laborum veritatis unde aliquid.
        </div>
    )
}

export default ScreenCapture