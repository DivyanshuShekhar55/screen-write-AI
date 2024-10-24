import React from 'react'
import SwitchButton from './SwitchButton'

function AIwindowHeader() {
  return (
    <div className='flex flex-row px-2 py-4 bg-gray-900 rounded-2xl rounded-b-none justify-between align-middle border-b-[1px] border-b-gray-500'>
      <div className='flex flex-row align-middle gap-x-3 ml-5 self-center '>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#d37abc"><path d="m668-380 152-130 120 10-176 153 52 227-102-62-46-198Zm-94-292-42-98 46-110 92 217-96-9ZM294-287l126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM173-120l65-281L20-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-340Z" /></svg>

        <h3 className='font-semibold'>Ask AI</h3>
      </div>


      <div className='flex gap-x-3 flex-row mr-5 align-top justify-around self-center'>
        <h2 className='font-semibold' >Attach Snaps</h2>
        <SwitchButton onColor="#EF476F" />
      </div>
    </div>
  )
}

export default AIwindowHeader
