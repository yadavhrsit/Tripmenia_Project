import React from 'react'

function Banner() {
  return (
    <div className="relative h-[70vh] md:h-[70vh]">
      <img 
        alt="Home banner for web" 
        fetchPriority="high" 
        decoding="async" 
        data-img="fill" 
        className="hidden sm:block aspect-[2/1] h-full bg-gray-lighter object-cover" 
        style={{position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent'}} 
        sizes="100vw" 
        srcset="https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fheaderbanner.png&amp;w=640&amp;q=75 640w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fheaderbanner.png&amp;w=750&amp;q=75 750w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fheaderbanner.png&amp;w=828&amp;q=75 828w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fheaderbanner.png&amp;w=1080&amp;q=75 1080w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fheaderbanner.png&amp;w=1200&amp;q=75 1200w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fheaderbanner.png&amp;w=1920&amp;q=75 1920w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fheaderbanner.png&amp;w=2048&amp;q=75 2048w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fheaderbanner.png&amp;w=3840&amp;q=75 3840w" 
        src="https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fheaderbanner.png&amp;w=3840&amp;q=75"
      />
      <img 
        alt="Home banner for mobile" 
        fetchPriority="high" 
        decoding="async" 
        data-img="fill" 
        className="sm:hidden aspect-[2/1] h-full bg-gray-lighter object-fill" 
        style={{position: 'absolute', height: '100%', width: '100%', left: '0', top: '40px', right: '0', bottom: '0', color: 'transparent'}} 
        sizes="100vw" 
        srcset="https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fphonebanner.png&amp;w=640&amp;q=75 640w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fphonebanner.png&amp;w=750&amp;q=75 750w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fphonebanner.png&amp;w=828&amp;q=75 828w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fphonebanner.png&amp;w=1080&amp;q=75 1080w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fphonebanner.png&amp;w=1200&amp;q=75 1200w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fphonebanner.png&amp;w=1920&amp;q=75 1920w,https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fphonebanner.png&amp;w=2048&amp;q=75 2048w, https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fphonebanner.png&amp;w=3840&amp;q=75 3840w" 
        src="https://www.gulfania.com/_next/image?url=%2Fimages%2Fbanner%2Fphonebanner.png&amp;w=3840&amp;q=75"
      />
    </div>
  )
}

export default Banner