import React from 'react';

const Hero = () => {
    return (
        <div>
            <div  className=" hero  h-[530px] "
     style={{
          backgroundImage: "url(https://i.ibb.co.com/ym7k4ZBw/Banner-min.jpg)",
           }}>
  <div className="hero-overlay relative"></div>
  <div className="hero-content justify-start items-start text-neutral-content text-left mb-[200px]">
    
    <div className="absolute left-0.5 ml-[140px] mb-10 ">
      <h1 className="mb-5 text-5xl font-semibold ">Bid on Unique Items from <br /> Around the World</h1>
      <p className="mb-5 opacity-[0.8]">
      Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
      </p>
      <button className="btn bg-white text-black rounded-[35px] px-5 py-4">Explore Auctions</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;