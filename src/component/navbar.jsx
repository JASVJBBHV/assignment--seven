import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
    return (
<div className=' px-[130px] pt-4 '>
    <div className="navbar bg-base-100  flex  justify-between">
  <div className="">
    <a className=" h-20 w-32"> <img  width={180} src="https://i.ibb.co.com/sx99QJ2/Auction-Gallery.png" alt="" /></a>
  </div>
  
  <div className="">
    <div className='flex items-center gap-6'>
    <a className=" text-2xl font-normal">Home </a>
    <a className=" text-2xl font-normal">Auctions</a>
    <a className=" text-2xl font-normal">Categories</a>
    <a className=" text-2xl font-normal">How to works</a>
    </div>
   
  </div>
 <div className=' '>

 <div className=" flex items-center  gap-5">
    
    
  <div className="indicator  bg-slate-100 p-1 w-[37px]  h-[35px] text-center  rounded-full btn-circle">
      <IoNotificationsOutline className='fill="none" viewBox="0 0 24 24" stroke="currentColor"' size={29}/>
        <span className=" badge badge-sm indicator-item bg-blue-950  w-3 h-5 rounded-[50px] top-1 left-1.5 text-white">9</span>
  </div>
 
      <div className=" w-10 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src="https://i.ibb.co.com/rK886jLL/Ellipse-19.png" />
    </div>

  </div>
 </div>
 
  
     
    
  
  
</div> 
        </div>
    );
};

export default Navbar;

