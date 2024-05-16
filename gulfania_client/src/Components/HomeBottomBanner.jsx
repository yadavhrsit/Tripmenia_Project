import React from "react";
import image from "../assets/bodyBottomBanner.webp";

const HomeBottomBanner = () => {
  return (
    <div className="container-fluid my-12 !px-0 md:!px-6 lg:my-16 2xl:!px-7 2xl::!px-16">
      <div className="relative md:px-12 md:py-12 lg:px-14 xl:px-20 xl:py-16  2xl::px-40 2xl:py-[88px] py-20 px-4 md:pl-0 md:!pb-16 xl:!py-20">
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
          srcSet={`${image} 640w, ${image} 750w, ${image} 828w, ${image} 1080w, ${image} 1200w, ${image} 1920w, ${image} 2048w, ${image} 3840w`}
          src={image}
        />
        <div className="relative bg-white shadow-card md:bg-transparent md:shadow-none max-w-[500px] md:max-w-[380px] rounded-lg m-auto md:!ml-auto md:!mr-0 lg:max-w-[440px] xl:max-w-[500px] px-4 pb-4 pt-8 md:px-0 md:pb-0 md:pt-0">
          <h2 className="text-center text-2xl font-bold text-black md:text-white md:text-left md:text-3xl xl:mb-6 2xl:text-5xl !text-primary md:!text-white text-2xl 2xl:text-[44px] 2xl:leading-[64px] mb-2 xl:mb-5">
            Adventure Awaits
          </h2>
          <p className="mb-7 leading-[1.78] text-black md:text-white md:text-base xl:mb-10 2xl:text-lg text-sm md:text-base !text-primary md:!text-white text-center md:text-left leading-[22px] md:leading-6 2xl:leading-8 mb-6 md:!mb-8">
            Discover and book activities for your trip. Enjoy exclusive deals on
            our easy-to-use travel booking platform.
          </p>
          <form noValidate className="relative">
            <div className="relative">
              <button
                type="submit"
                className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-4 py-2 text-sm rounded-md border border-transparent bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 right-[5px] block w-full py-4 text-sm tracking-wide md:absolute md:top-[5px] md:h-[46px] md:w-auto md:px-7 lg:!rounded-lg 2xl:h-[50px]"
              >
                Explore
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomBanner;
