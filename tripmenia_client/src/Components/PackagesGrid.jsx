import React, { useEffect, useState } from "react";
import Card from "./Card";

function PackagesGrid({
  categoryId,
  categoryTitle,
  categoryDescription,
  selectedCategory,
  setSelectedCategory,
}) {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/packages/view/${categoryId}`
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
    <div className="px-4 lg:px-6 xl:px-8 2xl:px-10 my-12">
      <div className="flex justify-between items-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packages?.map((pckg) => (
            <Card
              key={pckg._id}
              categoryName={categoryTitle || "Category Name"}
              packageName={pckg.packageName || "Package Name"}
              price={pckg.price || 1000}
              discount={pckg.discount || 55}
              image={`http://localhost:5000/upload/${pckg.images[0]}`}
              specialPrice={pckg.specialPrice || 500}
              packageId={pckg._id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PackagesGrid;
