import React, { useEffect, useState } from 'react';
import Component from '../component';

const Components = ({handleFavorite,purchasedItems}) => {
   
    const[items,setItems]=useState([])
    useEffect(()=>{
        fetch('items.json').then(res=>res.json()).then(data=>setItems(data))
    })

    return (
        <div>
           
           {
            items.map(item=><Component handleFavorite={handleFavorite} item={item} purchasedItems={purchasedItems}></Component>)
           }
            
        </div>
    );
};

export default Components;