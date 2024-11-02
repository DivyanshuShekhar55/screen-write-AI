import React, { useState } from 'react'

function ScreenCapture() {
    const [selectStartPos, setSelectStartPos] = useState({ x: null, y: null })
    const [currPos, setCurrPos] = useState({ x: null, y: null })
    const [isDragging, setisDragging] = useState(false)

    const handleMouseDown = (e) => {
        const startX = e.clientX
        const startY = e.clientY
        setSelectStartPos({ x: e.clientX, y: e.clientY })
        setisDragging(true)
    }

    const handleDrag = (e) => {
        if (isDragging) {
            setCurrPos({ x: e.clientX, y: e.clientY })
        }
    }

    const handleMouseUp = () => {
        setisDragging(false)

        //reset the states so that in the next drag event we don't see the last pos as start of the rect
        setSelectStartPos({ x: null, y: null })
        setCurrPos({ x: null, y: null })
    }


    return (

        <div
            className='w-screen h-screen cursor-pointer'
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
                        border: '2px solid  rgba(188, 170, 240, 0.9)',
                        backgroundColor: 'rgba(227, 215, 255, 0.25)',
                        boxShadow:'0 0 10px rgba(188, 170, 240, 0.8), 0 0 20px rgba(188, 170, 240, 0.6), 0 0 30px rgba(188, 170, 240, 0.4)',
                        borderRadius:'10px',
                        pointerEvents: 'none'  // Prevents the rectangle from interfering with events
                    }}
                />
            )}

        </div>
    )
}

export default ScreenCapture