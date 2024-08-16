import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules



const MobileSwiper = ({ packageData }) => {
  return (
    <div className="block sm:hidden">
      {" "}
      {/* Show only on mobile */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={true}
        className="mySwiper"
      >
        {/* Map over your images to create SwiperSlides */}
        {packageData.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[260px] sm:h-[320px]">
              <img
                alt={`pic-${index}`}
                className="object-cover"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
                src={`https://tripmenia.com/public/upload/${image}`}
              />
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default MobileSwiper;
