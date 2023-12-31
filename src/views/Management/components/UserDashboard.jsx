import { Modal } from 'antd'
import React, { useState } from 'react'
import Booked from 'views/Booking/components/Booked';
const UserDashboard = ({mode,setMode}) => {
  const [isModalOpened, setModalOpened] = useState(false);
  return (
    <div className='mt-4 mx-20 flex flex-col md:flex-row md:space-x-4 border-slate-800 border rounded-md bg-slate-900'>
      <div className='w-full p-10 justify-between space-y-12'>
        <div className='w-full flex justify-end'>
          <button
            class="w-fit px-6 py-3 text-white font-semibold bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-600 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
            onClick={()=>setMode("owner")}>
            Switch to owner's dashboard
          </button>
        </div>
        <div className='text-4xl font-bold text-slate-400'>
          Check out
        </div>
        <div className='flex flex-row space-x-10 w-full justify-between'>
          <div className='text-xl text-slate-400 h-full align-center flex my-auto'>
            First, you should check iot's history logs of devices. 
          </div>
          <button class="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-[44px] w-32 my-auto  rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
            <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
            <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
            <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
            <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
            <p class="z-10">Review logs</p>
          </button>
        </div>
        <div className='flex flex-row space-x-10 align-center'>
          <div className='text-xl text-slate-400 h-full align-center flex my-auto'>
            After check carefully, you can press the button check out here. 
          </div>
        </div>
        <div className='w-full justify-center flex'>
          <button onClick={()=>setModalOpened(true)}
            class="w-fit px-12 py-3 text-white font-semibold bg-gradient-to-r from-blue-800 via-pink-400 via-purple-600 to-blue-600 shadow-lg hover:scale-110 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer
            hover:bg-gradient-to-bl font-bold rounded-md shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
            Check out
          </button>
          {isModalOpened&&(
            <Modal 
             open={isModalOpened} onCancel={()=>setModalOpened(false)} 
             onOk={()=>setModalOpened(false)} width={1200}>
               <Booked isButtonClicked={isModalOpened}/>
            </Modal>
               
          )}
        </div>
        
      </div>
      
    </div>
  )
}

export default UserDashboard