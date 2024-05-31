import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function MobileCategoryFilter({
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  closeModal
}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://13.202.68.157:5000/api/categories/view"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchData();
  }, []);

  const handleMinPriceChange = (value) => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
  };

  return (
    <div className="h-full w-full min-w-fit overflow-y-auto bg-white block">
      <div className="grid grid-cols-1 gap-8 px-5 pb-3 md:px-7 ">
        <div>
          <div className="flex justify-between items-center w-full">
            <span className="block text-base font-bold capitalize text-gray-dark lg:text-xl my-4 lg:mb-2">
              Categories
            </span>
            <button
              type="button"
              className="bg-gray-800 hover:bg-gray-950 text-white font-semibold py-1 px-4 rounded border-none outline-none"
              onClick={closeModal}
            >
              x
            </button>
          </div>

          {categories.map((category) => (
            <div key={category._id} className="flex flex-col mb-3">
              <label className="flex flex-row items-center justify-between">
                <div className="relative leading-none">
                  <input
                    className="peer disabled:bg-gray-50 disabled:border-gray-200 h-6 w-6 rounded bg-transparent border border-gray-300 text-gray checked:!bg-red-1000 focus:ring-transparent checked:!border-gray-1000 hover:enabled:border-gray-1000 !text-gray-dark"
                    type="checkbox"
                    name={category.categoryName}
                    value={category._id}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategory([
                          ...selectedCategory,
                          category._id,
                        ]);
                      } else {
                        setSelectedCategory(
                          selectedCategory.filter((id) => id !== category._id)
                        );
                      }
                    }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="peer-checked:opacity-100 absolute opacity-0 text-white top-0 left-0 h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-bold text-gray leading-6 mr-2 rtl:ml-2 order-first !text-base !capitalize !text-gray !font-normal">
                  {category.categoryName}
                </span>
              </label>
            </div>
          ))}
        </div>
        <div>
          <span className="mb-3 block text-sm font-bold capitalize text-gray-dark lg:text-base">
            Price
          </span>
          <div className="xl:px-3">
            <Slider
              range
              allowCross={false}
              min={0}
              max={3000}
              defaultValue={[minPrice, maxPrice]}
              onChange={(value) => {
                setMinPrice(value[0]);
                setMaxPrice(value[1]);
              }}
              trackStyle={{ backgroundColor: "black", height: 4 }}
              railStyle={{ backgroundColor: "LightGray", height: 4 }}
              handleStyle={{
                borderColor: "gray",
                borderWidth: 5,
                height: 22,
                width: 22,
                marginTop: -9,
                backgroundColor: "black",
              }}
            />
          </div>
          <div className="mt-5 grid grid-cols-2 items-center justify-between gap-5 text-sm font-bold">
            <div className="overflow-hidden rounded-lg border border-gray-lighter bg-zinc-200 py-2">
              <p className="px-3 pt-1 text-gray-400">Min</p>
              <input
                className="w-full bg-zinc-200 border-none bg-gray-lightest p-3 pb-1 pt-0 text-sm outline-none focus:shadow-none focus:ring-0"
                min="0"
                max="3000"
                type="number"
                value={minPrice}
                onChange={(e) => handleMinPriceChange(e.target.value)}
              />
            </div>
            <div className="bg-zinc-200 overflow-hidden rounded-lg border border-gray-lighter bg-gray-lightest py-2">
              <p className="px-3 pt-1 text-gray-400">Max</p>
              <input
                className="w-full bg-zinc-200 border-none bg-gray-lightest p-3 pb-1 pt-0 text-sm outline-none focus:shadow-none focus:ring-0"
                min="0"
                max="3000"
                type="number"
                value={maxPrice}
                onChange={(e) => handleMaxPriceChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sticky inset-x-0 bottom-0 z-10 mt-4 flex items-center justify-between bg-white px-5 py-3 uppercase shadow-card sm:hidden md:px-7 xl:px-0">
        <div></div>
        <button
          type="button"
          className="inline-flex items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-8 py-2.5 text-base rounded-md border border-transparent bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 !px-4 font-semibold"
          onClick={closeModal}
        >
          Show Items
        </button>
      </div>
    </div>
  );
}

export default MobileCategoryFilter;
