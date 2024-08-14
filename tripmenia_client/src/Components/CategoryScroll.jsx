import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { useParams,useNavigate } from "react-router-dom";

const CategoryCarousel = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const containerRef = useRef(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tripmenia.com/api/categories/view"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (categoryId, index,categoryName) => {
    setSelectedCategory((prevCategory) => {
      const newCategory = prevCategory === categoryId ? null : categoryId;
      if (newCategory) {
        navigate(`/${categoryName}`);
      } else {
        params.category = "";
        navigate('/');
      }
      

      return newCategory;
    });

    const container = containerRef.current;
    const item = container.children[index];
    if (item) {
      container.scrollTo({
        left: item.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-2 lg:py-4 px-2 md:px-6 relative bg-gray-100">
      <div className="relative flex items-center overflow-hidden px-10">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 cursor-pointer hover:bg-white text-black px-2 py-1 rounded-md z-10"
          onClick={() => scroll("left")}
        >
          <FiChevronLeft />
        </button>
        <div
          className="flex overflow-x-hidden scroll-smooth"
          ref={containerRef}
        >
          {categories.map((category, index) => (
            <div
              className="min-w-[150px] shadow text-center mx-2 flex-shrink-0"
              key={index}
            >
              <button
                type="button"
                className={`px-2 w-full text-nowrap text-center py-2 mx-auto rounded-md font-semibold hover:bg-white ${
                  selectedCategory === category._id
                    ? "bg-[#89519f] text-white hover:text-black relative"
                    : "bg-gray-100 text-black"
                } text-xs md:text-sm xl:text-base`}
                onClick={() => handleCategoryClick(category._id, index,category.categoryName)}
              >
                {category.categoryName}
                {selectedCategory === category._id && (
                  <IoIosCloseCircle className="absolute text-gray-200 right-0 top-0 hover:text-[#89519f]" />
                )}
              </button>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 cursor-pointer hover:bg-white text-black px-2 py-1 rounded-md z-10"
          onClick={() => scroll("right")}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
