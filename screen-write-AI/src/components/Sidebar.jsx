import React from 'react'
import SidebarButton from './Sidebar-Button'
import chatgptIcon from '../assets/chatgptIcon.svg'
import handImg from '../assets/image.png'
import redCircle from '../assets/redCircle.png'
import blueCircle from '../assets/blueCircle.png'
import cut from '../assets/cut.png'

const icons = [
    {
        id: 1,
        name: "Chatgpt",
        icon: chatgptIcon,
        text: "Ask ChatGPT"
    },
    {
        id: 5,
        name: "Hold",
        icon: handImg,
        text: "Hold Images"
    }, {
        id: 2,
        name: "Snip",
        icon: cut,
        text: "Snipping Tool"
    },
    {
        id: 3,
        name: "Red",
        icon: redCircle,
        text: "Red Pen"
    },
    {
        id: 4,
        name: "Blue",
        icon: blueCircle,
        text: "Blue Pen"
    }

]

function Sidebar() {
    return (
        <div className='absolute top-1/3 right-8 justify-center '>
            <div className='flex flex-col gap-5'>
                {icons.map(({icon, text}) => (
                    <SidebarButton icon={icon} text={text}/>
                ))}

            </div>
        </div>
    )
}

export default Sidebar
