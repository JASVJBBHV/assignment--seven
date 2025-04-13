import React from 'react';

const ItemDetails = ({favItem,itemRemove}) => {
  // console.log(favItem)
    return (
        <div>
            <div className="m-3 card bg-base-100  shadow-sm border-t-1 border-b-8 border-t-fuchsia-400 border-b-pink-300 py-[25px] px-3 shadow-fuchsia-200 ">
  <div >
  <div className="grid grid-cols-5 gap-6  justify-center">
    <div className='mt-3 col-span-2'><img className='h-[96px] w-[96px]' src={favItem.image} alt="" />
    </div>

    <div className='col-span-3'>
      <h1 className='overflow-clip font-medium text-[16px] text-fuchsia-900 mb-[40px] '>{favItem.title}</h1>
      <div className='flex gap-12 items-center mb-3'>
        <div><h3 className=' font-medium text-[16px] text-fuchsia-900'>${favItem.currentBidPrice}</h3></div>
        <div><h3 className=' font-medium text-[16px] text-fuchsia-900'>Bids: {favItem.bidsCount}</h3></div>
      </div>
    </div>

  </div>
    <div className="card-actions justify-items-start">
      <button onClick={()=>itemRemove(favItem.id)} className="btn bg-white border-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default ItemDetails;