import React from 'react'
import hero1 from '../assets/Group 1261152707.png'
import hero from '../assets/Group 11.png'


const Hero = () => {
  return (
    <div className='flex-col py-10 justify-center  text-white' >
        <div className=" w-[80%] mx-auto">
            <div className="   pl-[6rem] text-center flex justify-center items-center">
                <h1 className="text-8xl   tracking-[2rem] text-gray-200/10 font-extrabold">
                    POLIT JOBS
                </h1>
            </div>
        </div>
        <div className="flex justify-center">
             <img src={hero1} alt="" className="w-[70%]" />
        </div>
        <div className=" flex-col py-3 text-center justify-center items-center">
            <h1 className="text-white  font-medium text-[2.5rem]">
                Travel Around The World
            </h1>
            <p className="text-white">One of the advantages of being disorganized is that one is always having suprising discoveries</p>
        </div>

    </div>
  )
}

export default Hero