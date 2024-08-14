/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomModalWithSlider = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const sliderSettings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`https://tripmenia.com/public/upload/${images[i]}`} />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      {/* Image Grid Trigger */}
      <div className="relative hidden md:grid h-[260px] grid-cols-1 grid-rows-2 gap-0 overflow-hidden transition-all duration-300 sm:h-[220px] md:h-[360px] md:grid-cols-[1fr_0.5fr_0.5fr] md:gap-1 md:rounded-xl lg:h-[300px] xl:h-[400px] xl:gap-2 3xl:h-[500px] 3xl:gap-3">
        {images.slice(0, 5).map((image, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className={`relative hidden md:block h-full cursor-pointer ${
              index === 0 ? "row-start-1 row-end-3" : ""
            }`}
          >
            <img
              alt={`pic ${index + 1}`}
              className="object-cover w-full h-full"
              src={`https://tripmenia.com/public/upload/${image}`}
            />
          </div>
        ))}
        <button
          onClick={() => openModal(0)}
          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white py-1 px-3 rounded-md hover:bg-opacity-70 transition"
        >
          View Photos
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full max-w-5xl py-12 px-16 bg-black bg-opacity-40 rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black rounded-full w-8 h-8 hover:bg-opacity-80 transition"
            >
              ✕
            </button>

            {/* Slick Slider */}
            <div className="w-full h-[80vh]">
              <Slider {...sliderSettings}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center h-full"
                  >
                    <img
                      src={`https://tripmenia.com/public/upload/${image}`}
                      alt={`pic ${index + 1}`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModalWithSlider;
