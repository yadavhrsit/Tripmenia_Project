import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Card from "./Card";

function CategorySlider({ categoryId, categoryTitle, categoryDescription,selectedCategory, setSelectedCategory}) {
  
  const [packages, setPackages] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://13.202.68.157:5000/packages/view/${categoryId}`
        );
        const data = await response.json();
      
        setPackages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
     
    }
    fetchData();
  }, [categoryId, categoryTitle, categoryDescription]);

  return (
    <div className="px-4 lg:px-6 xl:px-8 2xl:px-10 my-12  shadow">
      <div className="flex gap-2 justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-zinc-800 mb-2">
            {categoryTitle}
          </h2>
          <p className="text-gray-800 mb-4">{categoryDescription}</p>
        </div>
        {selectedCategory !== categoryId && (
          <button
            type="button"
            className="bg-gray-200 text-nowrap px-2 py-2 rounded font-medium text-sm md:text-base md:px-4"
            onClick={() => setSelectedCategory(categoryId)}
          >
            See more
          </button>
        )}
      </div>
      {packages.length > 0 && (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{
            position: "static",
          }}
        >
          {packages?.map((pckg) => (
            <SwiperSlide key={pckg._id} className="md:p-4">
              <Card
                categoryName={categoryTitle || "Category Name"}
                packageName={pckg.packageName || "Package Name"}
                price={pckg.price || 1000}
                discount={pckg.discount || 55}
                image={`http://13.202.68.157:5000/upload/${pckg.images[0]}`}
                specialPrice={pckg.specialPrice || 500}
                packageId={pckg._id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default CategorySlider;
