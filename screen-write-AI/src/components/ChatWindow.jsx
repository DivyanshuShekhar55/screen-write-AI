import React from 'react'
import AIwindowHeader from './AIwindowHeader'
import SwitchButton from './SwitchButton'

function ChatWindow() {
    return (
        <div className='bg-gray-900 text-white w-3/5 h-2/3 z-10 absolute top-1/4 left-1/4 rounded-2xl'>
            <div className='w-full h-[10%]'>
                <AIwindowHeader />
            </div>
        </div>
    )

}

export default ChatWindow
