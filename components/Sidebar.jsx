'use client'
import React, { useState } from 'react'
import { BiMenu,BiSolidChevronDown,BiChevronRight } from "react-icons/bi";
import { TbDashboard } from "react-icons/tb";
import { PiChatsCircleThin } from "react-icons/pi";
import { MdEmail,MdPermContactCalendar } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";import { CiYoutube } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";


const Sidebar = () => {
    const [visible, setVisible] = useState(true)
  return (
    <div className="relative flex h-[130vh] justify-center items-start">
        <BiMenu size={30} className={!visible?'absolute top-4 left-0.25 text-[#7879F1] ml-3 md:ml-5 lg:ml-8':'hidden'} onClick={()=>{setVisible(!visible)}}></BiMenu>
    <div className={visible?'h-[140vh] w-[180px] md:w-[250px] bg-white flex flex-col overflow-y-auto sidebar':'hidden'}>
        <div className="flex gap-8 pt-4 pl-5 pr-2 justify-evenly">
            <p className="hidden text-black md:block">weframetech</p>
            <BiMenu size={30} className='text-[#7879F1] ml-20 md:ml-0' onClick={()=>{setVisible(!visible)}}></BiMenu>
        </div>
        <div className="flex flex-col items-start justify-center mt-8 ml-6 gap-7 md:mt-10 md:ml-9">
            <div className="flex items-center justify-center gap-3 md:gap-6">
            <CiHome size={20} className='text-black'></CiHome>
            <p className="text-black text-[13px]">Dashboard</p>
        </div>
        <div className="flex items-center justify-between gap-3 md:gap-6">
           <div className="flex gap-3 md:gap-6">
           <MdOutlineStickyNote2 size={20} className='text-black'></MdOutlineStickyNote2>
            <p className="text-black text-[13px]">Content</p>
           </div>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-6">
            <FaUserFriends size={20} className='text-black'></FaUserFriends>
            <p className="text-black text-[13px]">Team</p>
        </div>
        <div className="flex items-center justify-between gap-3 md:gap-6">
           <div className="flex gap-3 md:gap-6">
           <BiSolidUserRectangle size={20} className='text-black'></BiSolidUserRectangle>
            <p className="text-black text-[13px]">User</p>
           </div>
           </div>
        <div className="flex items-center justify-between gap-3 md:gap-2">
           <div className="flex gap-3 md:gap-6">
           <FaComputer size={20} className='text-black'></FaComputer>
            <p className="text-black text-[13px]">App/Web</p>
           </div>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-2">
           <div className="flex gap-3 md:gap-6">
           <SiGoogleanalytics size={20}></SiGoogleanalytics>
            <p className="text-black text-[13px]">Analytics</p>
           </div>
           <div className="hidden md:block md:ml-2">
            <BiChevronRight size={20} className='text-[#7879F1]'></BiChevronRight>
           </div>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-2">
           <div className="flex gap-3 md:gap-6">
           <CiYoutube size={20}></CiYoutube>
            <p className="text-black text-[13px]">Media</p>
           </div>
           <div className="hidden md:block md:ml-2">
            <BiChevronRight size={20} className='text-[#7879F1]'></BiChevronRight>
           </div>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-6">
        <FaBell size={20}></FaBell>
            <p className="text-black text-[13px]">Notifications</p>
        </div>
        <div className="flex items-center justify-between gap-3 md:gap-6">
           <div className="flex gap-3 md:gap-6">
           <IoIosSettings size={20} className='text-black'></IoIosSettings>
            <p className="text-black text-[13px]">Settings</p>
           </div>
           </div>
        </div>
    </div>

</div>
  )
}

export default Sidebar