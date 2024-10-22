import React from 'react'
import chatgptIcon from '../assets/chatgptIcon.svg'

function SidebarButton({ icon, func }) {
    return (
        <div className='group flex flex-row px-2 justify-between rounded-xl' onClick={func}>
            {/* <h5 className='bg-white rounded-xl px-2 my-auto opacity-0  transition-opacity duration-500 group-hover:opacity-100 delay-500'> {text}</h5> */}

            <div className='bg-white rounded-full w-30 ml-1'>
                <img src={icon} alt="ChatGPT Icon" className='w-10 h-10' />
            </div>
        </div>
    )
}

export default SidebarButton
