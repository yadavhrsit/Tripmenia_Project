import { useEffect, useState } from "react";
import image from "../assets/bodyBanner.webp";

const HomeMiddleBanner = () => {
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
  }, []);
  return (
    <div className="container-fluid my-12 px-0 md:px-6 lg:my-16 2xl:px-16">
      <div className="relative md:px-12 md:py-12 lg:px-14 xl:px-20 xl:py-16 2xl:px-32 2xl:py-20 from-black/10 to-black/60 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-b md:before:rounded-2xl md:before:bg-gradient-to-r xl:before:hidden 4xl:py-[132px]">
        <img
          alt="Call to action Banner"
          loading="lazy"
          decoding="async"
          data-img="fill"
          className="aspect-[18/5] bg-gray-lighter object-cover md:max-h-full md:rounded-2xl"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: "transparent",
          }}
          sizes="100vw"
          src={`https://tripmenia.com/${
            banners.find((banner) => banner.name === "middleBanner")?.imagePath ||
            image
          }`}
        />
        <div className="relative m-auto md:ml-0 max-w-[450px] xl:max-w-[513px] px-8 py-9 md:px-0 md:py-0 flex flex-col justify-center md:justify-start z-20">
          <h2 className="text-center text-2xl font-bold text-white md:text-left md:text-3xl xl:mb-6 2xl:text-5xl mb-3">
            Your travel journey starts here
          </h2>
          <p className="mb-7 leading-[1.78] text-white md:text-base xl:mb-10 2xl:text-lg text-sm text-center md:text-left">
            Message us for travel tips, personalized itineraries, and vacation
            inspiration straight to you.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="m-auto inline-block rounded-lg bg-white px-9 py-3 text-sm font-semibold text-gray-dark transition duration-150 hover:bg-gray-dark hover:bg-black hover:text-white md:ml-0 md:text-base"
            href="https://wa.me/971567290409"
          >
            Message Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddleBanner;
