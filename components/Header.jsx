import React from 'react'
import { CiSearch } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";


const Header = () => {
  return (
    <div className='flex items-center justify-between w-full h-16 gap-2 pl-3 pr-6 '>
        <div className="lg:w-[300px] w-[150px] h-10 bg-[#FCFCFD] flex justify-start px-5 gap-2 items-center rounded-full">
            <CiSearch size={20} className='text-black'></CiSearch>
            <p className="font-sans text-[14px] ml-1 text-black lg:block hidden">Search</p>
        </div>
        <div className="flex items-center justify-center gap-4">
            <div className="items-center justify-center hidden gap-1 lg:flex">
                <p className="font-sans text-[14px] text-black">11-10-2022</p>
                <SlCalender size={20} className='ml-1 text-blue-700'></SlCalender>
                <p className="font-sans text-[14px] mx-2 text-black">OR</p>
                <p className="font-sans text-[14px] text-black">11-10-2022</p>
                <SlCalender size={20} className='ml-1 text-blue-700'></SlCalender>
            </div>
            <img src="./fr0.png" alt="user" className="object-cover ml-2 " width={190} height={40} />
        </div>
    </div>
  )
}

export default Header