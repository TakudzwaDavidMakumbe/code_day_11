import React from 'react'
import logo from '../assets/Frame 1.png'


const Navbar = () => {
  return (
    <div className='flex w-screen overflow-hidden'>
        <div className="flex py-5 px-10 justify-between w-screen" >
           <div className="">
           <img src={logo} alt="logo" className=" "/>
           </div>
            <div className="hidden md:flex justify-center   px-5">
                <div className="">
                <a href="#" className="p-4  text-white hover:text-blue-400">All Flight</a>
                <a href="#" className="p-4  text-white hover:text-blue-400">Schedule</a>
                <a href="#" className="p-4  text-white hover:text-blue-400">Passangers</a>
                <a href="#" className="p-4  text-white hover:text-blue-400">Your Orders</a> 
                </div>
                <div className="">
                <a href="#" className="px-5 py-2  text-white hover:bg-white hover:font-bold hover:text-blue-400 rounded-full border">Let`s Fly</a> 
                </div>
            </div>
            {/* --humberger--- */}
            <button className="space-y-1 group md:hidden">
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white"></div>
            </button>

            {/* --menu--- */}
            <div className="bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-full right-0 duration-150 flex flex-col space-y-3 justify-end">
              <button className="px-10 py-8 relative ml-auto">
                <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
                <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
              </button>
                <div className="">
                <a href="#" className="py-4  flex justify-center w-full text-white hover:bg-[#202020]">All Flight</a>
                <a href="#" className="py-4  flex justify-center w-full text-white hover:bg-[#202020]">Schedule</a>
                <a href="#" className="py-4  flex justify-center w-full text-white hover:bg-[#202020]">Passangers</a>
                <a href="#" className="py-4  flex justify-center w-full text-white hover:bg-[#202020]">Your Orders</a> 
                </div>
                <div className="">
                <a href="#" className="py-4  flex justify-center w-full  text-white hover:bg-white hover:font-bold hover:text-blue-400 rounded-full border">Let`s Fly</a> 
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar