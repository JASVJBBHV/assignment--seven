import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-[133px]'>
            <img className='mb-[12px]' src="https://i.ibb.co.com/PvThqxn0/Auction-Gallery.png" alt="" />
            
            <div className='flex items-center gap-4 mb-[23px]'>
            <p className='font-normal text-[22px]'>Bid.</p>
            <p className='font-normal text-[22px]'>Win.</p>
            <p className='font-normal text-[22px]'>Own.</p>
            </div>
            <div  className='flex items-center gap-12'>
            <p className='font-normal text-[18px]'>Home</p>
            <p className='font-normal text-[18px]'>Auctions.</p>
            <p className='font-normal text-[18px]'  >Categories.</p>
            <p className='font-normal text-[18px]'>How to works</p>
            </div>
        <p className='font-normal text-xl mt-[33px] mb-[133px]'>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;