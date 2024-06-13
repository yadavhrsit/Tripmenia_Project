import React, { useEffect, useState } from "react";
import banner from "../assets/banner.jpg";

function Banner() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://tripmenia.com/api/banners/get-banner"
        );
        const data = await response.json();
        setBanners(data.banner);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [])
  return (
    <div className="relative h-[45vh] md:h-[85vh]">
      <img
        alt="Home banner for web"
        fetchPriority="high"
        decoding="async"
        data-img="fill"
        className="hidden sm:block aspect-[2/1] h-full bg-gray-lighter object-cover"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          left: "0",
          top: "0",
          right: "0",
          bottom: "0",
          color: "transparent",
        }}
        sizes="100vw"
        src={`https://tripmenia.com/${
          banners.find((banner) => banner.name === "topBanner")?.imagePath ||
          banner
        }`}
      />
      <img
        alt="Home banner for mobile"
        fetchPriority="high"
        decoding="async"
        data-img="fill"
        className="sm:hidden aspect-[2/1] h-full bg-gray-lighter object-fill"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          left: "0",
          top: "40px",
          right: "0",
          bottom: "0",
          color: "transparent",
        }}
        sizes="100vw"
        src={`https://tripmenia.com/${
          banners.find((banner) => banner.name === "topBanner")?.imagePath ||
          banner
        }`}
      />
    </div>
  );
}

export default Banner;
