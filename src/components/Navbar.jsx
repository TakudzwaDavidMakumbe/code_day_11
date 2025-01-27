import React from 'react'
import logo from '../assets/Frame 1.png'
import hero from '../assets/Group 11.png'
import Hero from './Hero'

const Navbar = () => {
  return (
    <div className='flex'>
        <div className="flex py-5 px-10 justify-between w-full" >
           <div className="">
           <img src={logo} alt="logo" className=" "/>
           </div>
            <div className="flex justify-center   px-5">
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
            
        </div>
        
    </div>
  )
}

export default Navbar