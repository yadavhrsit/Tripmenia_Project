import { useState, useEffect } from "react";
import CategoryFilter from "../Components/CategoryFilter";
import Card from "../Components/Card";
import PhoneCategoryFilter from "../Components/PhoneCategoryFilter";

function Explore() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [packages, setPackages] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
  const [loading, setLoading] = useState(false);
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const [total, setTotal] = useState(0);
  const [queryTotal, setQueryTotal] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = selectedCategory.join(",");
        const response = await fetch(
          `http://13.202.68.157:5000/api/packages/filter-view?categories=${categories}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${page}&size=${12}`
        );
        const data = await response.json();
        setPackages((prevPackages) => [...prevPackages, ...data.packages]);
        setTotal(data.total);
        setQueryTotal(data.queryTotal);
        setSize(data.packages.length);
        if (
          data.length === data.total ||
          data.queryTotal === page * data.packages.length
        ) {
          setAllDataLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [maxPrice, minPrice, selectedCategory, selectedCategory.length, page]);

  useEffect(() => {
    setPackages([]);
    setPage(1);
  }, [selectedCategory, selectedCategory.length, minPrice, maxPrice]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="px-4 lg:px-14 pt-2 mt-16 md:pt-24 grid grid-cols-1 gap-4 xl:grid-cols-[330px_5fr] 2xl:gap-12">
      <div className="my-2 mx-4 xl:hidden flex items-center justify-between">
        <p className="text-gray-dark text-sm md:text-base font-bold text-gray-dark">
          Showing {1} - {page * size}{" "}
          <span className="font-normal text-gray">
            out of {queryTotal} Destinations
          </span>
        </p>
        <button
          type="button"
          className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-4 py-2 text-sm rounded-md hover:text-gray-1000 focus:ring-gray-900/30 !p-0 focus:!ring-0 xl:hidden"
          onClick={openModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-auto w-6 lg:w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`fixed z-50 inset-0 overflow-y-auto ${
          modalIsOpen ? "" : "hidden"
        }`}
        labelled="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-0 px-0 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <PhoneCategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              page={page}
              size={size}
              queryTotal={queryTotal}
              closeModal={closeModal}
            />
            
          </div>
        </div>
      </div>

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        page={page}
        size={size}
        queryTotal={queryTotal}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-2">
        {packages?.length > 0 ? (
          packages.map((pckg) => (
            <Card
              key={pckg._id}
              categoryName={pckg.categoryId.categoryName || "Category Name"}
              packageName={pckg.packageName || "Package Name"}
              price={pckg.price || 1000}
              discount={pckg.discount || 55}
              image={`http://13.202.68.157:5000/api/upload/${pckg.images[0]}`}
              specialPrice={pckg.specialPrice || 500}
              packageId={pckg._id}
            />
          ))
        ) : (
          <>
            <div className="col-span-full flex justify-center items-center h-60">
              <h1 className="text-xl font-semibold text-gray-800">
                No Packages Found
              </h1>
            </div>
          </>
        )}
        {!allDataLoaded && (
          <div className="flex justify-center mt-4 w-full col-span-full h-fit">
            <button
              onClick={handleLoadMore}
              className="bg-gray-800 hover:bg-gray-950 text-white font-semibold py-2 px-8 rounded"
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
