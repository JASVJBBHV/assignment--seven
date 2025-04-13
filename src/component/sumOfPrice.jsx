

const SumOfPrice = ({favItems}) => {
   
//    console.log(favitem.currentBidPrice)
    let totalPrice=0
    favItems.forEach(item=>{
     totalPrice +=item.currentBidPrice;
   })

   
    return (
        <div>
            <h1>${totalPrice}</h1>
        </div>
    );
};

export default SumOfPrice;