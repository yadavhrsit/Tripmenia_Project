import { useState, useEffect } from "react";
import Banner from "../Components/Banner";
import CategoryScroll from "../Components/CategoryScroll";
import CategorySliderWithPackages from "../Components/CategorySliderWithPackages";
import PackagesGrid from "../Components/PackagesGrid";
import HomeMiddleBanner from "../Components/HomeMiddleBanner";
import HomeExperienceSection from "../Components/HomeExperienceSection";
import { useParams } from "react-router-dom";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [pkg, setPackage] = useState([]);

  const params = useParams();
  console.log(params.category);

  useEffect(() => {
    async function fetchData() {
      if (selectedCategory === null) {
        try {
          const response = await fetch(
            "https://tripmenia.com/api/categories/view/"
          );
          const data = await response.json();
          setCategories(data);
          if (params?.category) {
            console.log(params?.category);
            // Decode the URL-encoded package name
            const decodedCategoryName = decodeURIComponent(params.category);
            console.log(decodedCategoryName);
            // Find the category in the data array
            const caughtCategory = data.find(
              (p) => p.categoryName === decodedCategoryName
            );
            console.log(caughtCategory);
            // Set the selected category if the package was found
            if (caughtCategory) {
              setSelectedCategory(caughtCategory._id);
            }
          }

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        try {
          const response = await fetch(
            `https://tripmenia.com/api/packages/view/${selectedCategory}`
          );
          const data = await response.json();
          setPackage(data);
          window.scrollTo(0, 300);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    }
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="home">
      <Banner />
      <CategoryScroll
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {selectedCategory === null && categories?.length > 0
        ? categories.map((category, index) => {
            return (
              <CategorySliderWithPackages
                key={index}
                categoryTitle={category.categoryName}
                categoryDescription={category.categoryDescription}
                categoryId={category._id}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            );
          })
        : pkg?.length > 0 && (
            <PackagesGrid
              key={selectedCategory}
              categoryTitle={pkg[0].categoryId.categoryName}
              categoryDescription={pkg[0].categoryId.categoryDescription}
              categoryId={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          )}

      <HomeMiddleBanner />
      <HomeExperienceSection />
    </div>
  );
}

export default Home;
