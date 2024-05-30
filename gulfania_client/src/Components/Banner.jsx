import React from 'react';
import banner from "../assets/banner.jpg";

function Banner() {
  return (
    <div className="relative h-[45vh] md:h-[85vh]">
      <img 
        alt="Home banner for web" 
        fetchPriority="high" 
        decoding="async" 
        data-img="fill" 
        className="hidden sm:block aspect-[2/1] h-full bg-gray-lighter object-cover" 
        style={{position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent'}} 
        sizes="100vw" 
        src={banner}
      />
      <img 
        alt="Home banner for mobile" 
        fetchPriority="high" 
        decoding="async" 
        data-img="fill" 
        className="sm:hidden aspect-[2/1] h-full bg-gray-lighter object-fill" 
        style={{position: 'absolute', height: '100%', width: '100%', left: '0', top: '40px', right: '0', bottom: '0', color: 'transparent'}} 
        sizes="100vw" 
        src={banner}
      />
    </div>
  );
}

export default Banner;
