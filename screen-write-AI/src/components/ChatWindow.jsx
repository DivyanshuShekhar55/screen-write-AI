import React from 'react'
import AIwindowHeader from './AIwindowHeader'
import SwitchButton from './SwitchButton'

function ChatWindow() {
    return (
        <div className='bg-gray-900 text-white w-3/5 h-2/3 z-10 absolute top-1/4 left-1/4  rounded-2xl border-4 border-gray-300'>
            <div className='w-full h-1/5'>
                <AIwindowHeader />
            </div>
        </div>
    )

}

export default ChatWindow
