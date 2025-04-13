

import { ToastContainer, toast} from 'react-toastify';

const Component = ({item,handleFavorite,purchasedItems}) => {
    const purchase=purchasedItems.includes(item.id);

   
    function handleButton(){

    
            
        toast('An item is added to favorites');
        handleFavorite(item,item.id)
        

    }
    return (
        <div className=' border-t-2  border-blue-50 '>
           <div className='grid grid-cols-5 p-[32px]'>
          <div className='col-span-2'><div className='grid grid-cols-3 items-center gap-[24px]'><div className=' max-w-[96px] max-h-[96px] '><img className='h-[96px] w-[96px] object-cover' src={item.image}  alt="" /> </div><div className='col-span-2'><h3 className=' font-medium text-[18px] text-[#0E2954]'>{item.title}</h3></div></div></div>
          <div className='text-center'><h3 className='font-medium text-[18px] text-[#0E2954] pl-[45px]'>${item.currentBidPrice}</h3></div>
          <div className='text-right'><h3 className='font-medium text-[18px] text-[#0E2954]'>{item.timeLeft}Days Left</h3></div>
          <div className={`ml-[100px] `}><button disabled={purchase} className={` bg-white border-0 ${purchase && 'cursor-not-allowed'}`} onClick={handleButton} >
  <svg xmlns="http://www.w3.org/2000/svg" fill={purchase?'red':'none'} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-[2.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button></div>
<ToastContainer />
        </div>
        </div>
    );
};

export default Component;