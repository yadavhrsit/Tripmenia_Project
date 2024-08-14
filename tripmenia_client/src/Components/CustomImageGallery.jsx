import { useState, useRef } from "react";
import ReactModal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./CustomImageGallery.css";

const CustomImageGallery = ({ images }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clicked, setClicked] = useState(0);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const galleryImages = images.map((image) => ({
    original: `https://tripmenia.com/public/upload/${image}`,
    thumbnail: `https://tripmenia.com/public/upload/${image}`,
  }));

  return (
    <>
      <div className="relative hidden md:grid h-[260px] grid-cols-1 grid-rows-2 gap-0 overflow-hidden transition-all duration-300 sm:h-[320px] md:h-[400px] md:grid-cols-[1fr_0.5fr_0.5fr] md:gap-1 md:rounded-xl lg:h-[500px] xl:h-[600px] xl:gap-2 3xl:h-[700px] 3xl:gap-3">
        <div
          onClick={() => {
            setClicked(0);
            openModal();
          }}
          className="relative hidden md:block row-start-1 row-end-3 h-full cursor-pointer"
        >
          <img
            alt="pic 1"
            className="object-cover w-full h-full"
            src={`https://tripmenia.com/public/upload/${images[0]}`}
          />
        </div>
        <div
          onClick={() => {
            setClicked(1);
            openModal();
          }}
          className="relative hidden h-full cursor-pointer md:block"
        >
          <img
            alt="pic 2"
            className="object-cover w-full h-full"
            src={`https://tripmenia.com/public/upload/${images[1]}`}
          />
        </div>
        <div
          className="relative hidden h-full cursor-pointer md:block"
          onClick={() => {
            setClicked(2);
            openModal();
          }}
        >
          <img
            alt="pic 3"
            className="object-cover w-full h-full"
            src={`https://tripmenia.com/public/upload/${images[2]}`}
          />
        </div>
        <div
          className="relative hidden h-full cursor-pointer md:block"
          onClick={() => {
            setClicked(3);
            openModal();
          }}
        >
          <img
            alt="pic 4"
            className="object-cover w-full h-full"
            src={`https://tripmenia.com/public/upload/${images[3]}`}
          />
        </div>
        <div
          className="relative hidden h-full cursor-pointer md:block"
          onClick={() => {
            setClicked(4);
            openModal();
          }}
        >
          <img
            alt="pic 5"
            className="object-cover w-full h-full"
            src={`https://tripmenia.com/public/upload/${images[4]}`}
          />
        </div>
        <button
          onClick={openModal}
          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white py-1 px-3 rounded-md hover:bg-opacity-70 transition"
        >
          View Photos
        </button>
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Gallery"
        className="flex justify-center items-center bg-transparent outline-none"
        overlayClassName="fixed z-[60] inset-0 bg-black bg-opacity-90 flex justify-center items-center p-4"
      >
        <div
          id="custom"
          className="relative w-full max-w-screen-lg max-h-screen"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 bg-black bg-opacity-60 text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition focus:outline-none focus:ring-2 focus:ring-white"
          >
            ✕
          </button>

          {/* Main Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            className="w-full h-[80vh]"
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            initialSlide={clicked}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            loop={true}
          >
            {galleryImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full flex justify-center items-center relative">
                  <img
                    src={item.original}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg relative"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Swiper */}

          <div className="nav-btn custom-prev-button" ref={navigationPrevRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="main-grid-item-icon"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <line x1="19" x2="5" y1="12" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </div>

          <div className="nav-btn custom-next-button" ref={navigationNextRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="main-grid-item-icon"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <line x1="5" x2="19" y1="12" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default CustomImageGallery;
