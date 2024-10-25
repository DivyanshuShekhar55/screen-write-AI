import React from 'react'
import AIwindowHeader from './AIwindowHeader'
import SwitchButton from './SwitchButton'
import AItextBar from './AItextBar'
import AIchatMessage from './AIchatMessage';

const sampleMessages = [
    {
      type: 'ai',
      name: 'Cosima AI',
      text: 'How does it sound for you?',
      timestamp: '13:45',
      avatar: '/api/placeholder/32/32'
    },
    {
      type: 'user',
      text: 'Yes, that sounds good!',
      timestamp: '13:53'
    },
    {
      type: 'user',
      text: 'kya bro kaisa chal rha ??',
      timestamp: '13:53',
    },
    {
      type: 'ai',
      name: 'Cosima AI',
      text: 'Good! Send you their visual',
      timestamp: '13:45',
      avatar: '/api/placeholder/32/32'
    },
    {
        type: 'ai',
        name: 'Cosima AI',
        text: 'How does it sound for you?',
        timestamp: '13:45',
        avatar: '/api/placeholder/32/32'
      },
      {
        type: 'user',
        text: 'Yes, that sounds good!',
        timestamp: '13:53'
      },
      {
        type: 'user',
        text: '',
        timestamp: '13:53',
      },
      {
        type: 'ai',
        name: 'Cosima AI',
        text: 'Good! Send you their visual',
        timestamp: '13:45',
        avatar: '/api/placeholder/32/32'
      }
  ];

function ChatWindow() {
    return (
        <div className='bg-gray-900 text-white w-3/5 h-2/3 z-10 absolute top-1/4 left-1/4 rounded-3xl flex flex-col justify-between'>
            <div className='w-full h-[10%]'>
                <AIwindowHeader />
            </div>

            <div className='overflow-y-scroll mt-4 px-8 text-balance text-[1.1rem]'>
               <AIchatMessage messages={sampleMessages} />
            </div>

            <div className='w-[90%] h-[10%] my-[2%] mx-auto'>
                <AItextBar/>
            </div>
        </div>
    )
}

export default ChatWindow