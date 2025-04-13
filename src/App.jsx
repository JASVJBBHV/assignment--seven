
import './App.css'
import Components from './component/components/components';
import Footer from './component/footer'
import Hero from './component/hero'
import ItemDetails from './component/itemDetails';
import Navbar from './component/navbar'
import { CiHeart } from "react-icons/ci";

import { useState } from 'react';
import SumOfPrice from './component/sumOfPrice';

function App() {
  // const [count, setCount] = useState(0)
  // const itemPromise=itemFetch()
  const [purchasedItems, setPurchasedItems] = useState([]); 
  const [favItems, setFabItems] = useState([])
 
  const handleFavorite=(item)=>{
    if(
      !favItems.find(fav=>fav.id===item.id)){
        setFabItems([...favItems,item])
        setPurchasedItems([...purchasedItems,item.id])
      }

  }

  const itemRemove=(id)=>{
     console.log(id)
     const remainingFavItem=favItems.filter((removeItem)=>removeItem.id !==id);
     setFabItems(remainingFavItem)
     const remainingPurchasedItem=purchasedItems.filter((purchasedItem)=>purchasedItem !==id);
     setPurchasedItems(remainingPurchasedItem)

  }



  return (
    <>
    
     <Navbar></Navbar>
     <Hero></Hero>
     
     <div className='bg-blue-50 pt-[132px] px-[140px] pb-[116px]'>
     <h1 className='text-[32px] font-normal text-[#0E2954] mb-5'>Active Auctions</h1>
     <p className='text-[20px] font-normal text-black mb-5'>Discover and bid on extraordinary items</p>
     <div className='grid grid-cols-3 gap-[24px]'>
                  {/* bid items  */}
      <div className='col-span-2 bg-white rounded-3xl mb-2'>
        <div className='grid grid-cols-5 p-[32px]'>
          <div className='col-span-2'><h3 className='font-normal text-[20px] text-black'>Items</h3></div>
          <div className='text-right'><h3 className='  font-normal text-[20px] text-black'>Current Bid</h3></div>
          <div className='text-right'><h3 className=' font-normal text-[20px] text-black'>Time Left</h3></div>
          <div className='text-right'><h3 className=' font-normal text-[20px] text-black'>Bid Now</h3></div>
          
        </div>
          <div>
              <Components handleFavorite={handleFavorite} purchasedItems={purchasedItems}></Components>
          </div>

      </div>
      
      
      {/* favorite items */}
      
      <div className='bg-white rounded-3xl'>
          <div className='flex items-center justify-center gap-2 pt-[32px] pb-[16px] border-b-2 mb-[47px] border-blue-50 '>
          <CiHeart size={37} color='purple'  />
          <h1 className='text-[#6399f1] font-medium text-[32px] '>Favorite Items</h1>
          
          </div>




        <div className='m-3'> 
          {
          favItems.length===0 && <div className='text-center border-t-2 border-b-2 border-t-blue-900 border-b-blue-900'>  <p className=' my-5 font-semibold text-[26px] text-pink-400 text-shadow-2xs text-shadow-neutral-950'> No items in here</p>
          <p className=' mb-4 font-normal text-[18px] text-fuchsia-700'>Click the heart icon on any item to add it to your favorites</p>
          </div>
        
          } 
          {
            favItems.map((favItem)=> <ItemDetails     key={favItem.id} favItem={favItem} itemRemove={itemRemove} ></ItemDetails>)
          }
       
        </div>
       



          <div className='grid grid-cols-3 gap-6 items-center justify-center  mt-[47px] p-[32px] border-t-2  border-blue-50 ' >
            <div className='col-span-2'><h1 className='text-[black] font-medium text-[22px]'>Total bids Amount</h1></div>
            <div className='flex'><h1 className='text-[black] font-medium text-[22px]'>
              
              {
              favItems.length===0 && '$0000'
              }
              {

              
               favItems.length>0 && <SumOfPrice favItems={favItems} ></SumOfPrice>
              }

              
              
              
              </h1></div>
          </div>
      </div>
     </div>
      </div>
      
     <Footer></Footer>
    </>
  )
}

export default App
