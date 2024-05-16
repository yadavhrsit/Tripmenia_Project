import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

const CategoryCarousel = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories/view");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [swiper, setSwiper] = useState(null);

  const prevSlide = () => {
    if (swiper) swiper.slidePrev();
  };

  const nextSlide = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <div className="py-2 lg:py-4 px-8 md:px-16 relative bg-gray-100">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        onSwiper={setSwiper}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="w-fit">
            <button
              type="button"
              className={`px-2 py-2 mx-auto rounded-md text-center font-semibold hover:bg-white ${
                selectedCategory === category._id
                  ? "bg-red-900 text-white hover:text-black relative"
                  : "bg-gray-100 text-black"
              } text-xs md:text-sm xl:text-base`}
              onClick={() =>
                setSelectedCategory((prevCategory) =>
                  prevCategory === category._id ? null : category._id
                )
              }
            >
              {category.categoryName}
              {selectedCategory === category._id && (
                <IoIosCloseCircle className="absolute text-gray-200 right-0 top-0 hover:text-red-900" />
              )}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 cursor-pointer hover:bg-white text-black px-2 py-1 rounded-md"
        onClick={prevSlide}
      >
        <FiChevronLeft />
      </button>
      <button
        className="button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 cursor-pointer hover:bg-white text-black px-2 py-1 rounded-md"
        onClick={nextSlide}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default CategoryCarousel;
