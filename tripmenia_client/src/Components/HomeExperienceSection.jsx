import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

function HomeExperienceSection() {
  return (
    <section className="px-4 lg:px-6 xl:px-8 2xl:px-10 my-12">
      <div>
        <h2 className="md:text-h2 font-bold text-gray-dark text-xl capitalize leading-8 md:text-2xl lg:leading-[48px] 2xl:leading-[48px] 2xl:text-3xl">
          Book Your Experience
        </h2>
        <p className="text-gray-dark text-sm md:text-base font-normal capitalize leading-6 text-secondary 2xl:text-lg">
          Discover, Book, and Enjoy with Ease and Confidence
        </p>
      </div>
      <div className="hidden grid-cols-1 gap-5 md:grid-cols-2 xl:grid xl:grid-cols-4 mt-8">
        <div className="group/item card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 2xl:p-12">
          <div className="relative inline-flex aspect-auto h-16 w-10 object-contain transition-all duration-500 group-hover/item:-translate-y-1 xl:h-[84px] xl:w-16 2xl:h-[110px] 2xl:w-[70px]">
            <svg
              fill="#000000"
              viewBox="0 0 128 128"
              id="Layer_1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M109,55c0-29.8-24.2-54-54-54C25.2,1,1,25.2,1,55s24.2,54,54,54c13.5,0,25.8-5,35.2-13.1l25.4,25.4l5.7-5.7L95.9,90.2 C104,80.8,109,68.5,109,55z M55,101C29.6,101,9,80.4,9,55S29.6,9,55,9s46,20.6,46,46S80.4,101,55,101z"></path>{" "}
                  <path d="M25.6,30.9l6.2,5.1C37.5,29,46,25,55,25v-8C43.6,17,32.9,22.1,25.6,30.9z"></path>{" "}
                  <path d="M17,55h8c0-2.1,0.2-4.1,0.6-6.1l-7.8-1.6C17.3,49.8,17,52.4,17,55z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 2xl:pt-9">
            Explore Experiences
          </h4>
          <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 2xl:text-base 2xl:leading-7">
            Browse a variety of unique travel experiences, tailored for every
            preference.
          </p>
        </div>
        <div className="group/item card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 2xl:p-12">
          <div className="relative inline-flex aspect-auto h-16 w-10 object-contain transition-all duration-500 group-hover/item:-translate-y-1 xl:h-[84px] xl:w-16 2xl:h-[110px] 2xl:w-[70px]">
            <svg
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="3"
              stroke="#000000"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M31.74,7.19,13.36,14.85a1,1,0,0,0-.62.93V32.11h0A22.89,22.89,0,0,0,23.93,51.78l8.18,4.86,8.06-4.85a22.87,22.87,0,0,0,11.09-19.6V14.84a1,1,0,0,0-.65-.94L32.48,7.18A1,1,0,0,0,31.74,7.19Z"></path>
                <polyline points="22.01 33.5 29.44 39.12 42.56 20.69"></polyline>
              </g>
            </svg>
          </div>
          <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 2xl:pt-9">
            Secure &amp; Reliable Booking
          </h4>
          <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 2xl:text-base 2xl:leading-7">
            Experience hassle-free booking with our trusted and secured
            platform.
          </p>
        </div>
        <div className="group/item card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 2xl:p-12">
          <div className="relative inline-flex aspect-auto h-16 w-10 object-contain transition-all duration-500 group-hover/item:-translate-y-1 xl:h-[84px] xl:w-16 2xl:h-[110px] 2xl:w-[70px]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10.6456 18.6327L11.3278 16.1316C11.4069 15.8415 11.4464 15.6965 11.3714 15.5983C11.2963 15.5 11.146 15.5 10.8454 15.5H8.90212C8.50324 15.5 8.30379 15.5 8.2324 15.3712C8.16101 15.2424 8.26671 15.0733 8.47812 14.735L10.0219 12.265C10.2333 11.9267 10.339 11.7576 10.2676 11.6288C10.1962 11.5 9.99676 11.5 9.59788 11.5H7.19371C6.87716 11.5 6.71888 11.5 6.64405 11.3962C6.56921 11.2924 6.61927 11.1422 6.71937 10.8419L9.38604 2.84189C9.44104 2.67688 9.46854 2.59438 9.53401 2.54719C9.59948 2.5 9.68645 2.5 9.86038 2.5H15.6169C16.0084 2.5 16.2042 2.5 16.276 2.62683C16.3478 2.75365 16.2471 2.92152 16.0457 3.25725L13.9543 6.74275C13.7529 7.07848 13.6522 7.24635 13.724 7.37317C13.7958 7.5 13.9916 7.5 14.3831 7.5H15.5C15.9363 7.5 16.1545 7.5 16.2236 7.6382C16.2927 7.77639 16.1618 7.95093 15.9 8.3L14.1 10.7C13.8382 11.0491 13.7073 11.2236 13.7764 11.3618C13.8455 11.5 14.0637 11.5 14.5 11.5H16.4682C16.9166 11.5 17.1408 11.5 17.2091 11.641C17.2774 11.782 17.1385 11.9579 16.8607 12.3098L11.5204 19.0741C10.9293 19.8229 10.6337 20.1973 10.4514 20.1053C10.2691 20.0134 10.3946 19.5531 10.6456 18.6327Z"
                  stroke="#222222"
                ></path>{" "}
                <path
                  d="M19.5 4L18 6H20L18.5 8"
                  stroke="#2A4157"
                  stroke-opacity="0.24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M6.5 16L5 18H7L5.5 20"
                  stroke="#2A4157"
                  stroke-opacity="0.24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 2xl:pt-9">
            Instant Confirmation
          </h4>
          <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 2xl:text-base 2xl:leading-7">
            Get immediate booking confirmations for swift and efficient travel
            planning.
          </p>
        </div>
        <div className="group/item card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 2xl:p-12">
          <div className="relative inline-flex aspect-auto h-16 w-10 object-contain transition-all duration-500 group-hover/item:-translate-y-1 xl:h-[84px] xl:w-16 2xl:h-[110px] 2xl:w-[70px]">
            <svg
              fill="#000000"
              viewBox="0 0 64 64"
              id="Layer_1_1_"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M46,22h-6.671l5.557-6.352C45.604,14.828,46,13.775,46,12.685V12.5c0-2.481-2.019-4.5-4.5-4.5S37,10.019,37,12.5V14h2v-1.5 c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5v0.185c0,0.606-0.22,1.19-0.619,1.646L37,21.624V24h9V22z"></path>{" "}
                  <path d="M54,24h2v-3h2v-2h-2V8h-2.618L48,18.764V21h6V24z M50.118,19L54,11.236V19H50.118z"></path>{" "}
                  <path d="M50.405,32.627C57.596,31.061,63,24.653,63,17c0-8.822-7.178-16-16-16c-7.653,0-14.061,5.404-15.627,12.595 C29.608,13.207,27.807,13,26,13C12.215,13,1,24.215,1,38s11.215,25,25,25s25-11.215,25-25C51,36.193,50.793,34.392,50.405,32.627z M47,3c7.72,0,14,6.28,14,14s-6.28,14-14,14s-14-6.28-14-14S39.28,3,47,3z M44.961,37H43v2h1.949 c-0.235,4.484-2.024,8.553-4.847,11.688l-1.375-1.375l-1.414,1.414l1.375,1.375c-3.135,2.824-7.204,4.612-11.688,4.847V55h-2v1.949 c-4.484-0.235-8.553-2.024-11.688-4.847l1.375-1.375l-1.414-1.414l-1.375,1.375C9.074,47.553,7.286,43.484,7.051,39H9v-2H7.051 c0.235-4.484,2.024-8.553,4.847-11.688l1.375,1.375l1.414-1.414l-1.375-1.375c3.135-2.824,7.204-4.612,11.688-4.847V21h2v-1.961 c1.438,0.076,2.862,0.318,4.255,0.72c1.156,6.611,6.374,11.829,12.986,12.986C44.642,34.138,44.884,35.562,44.961,37z M26,61 C13.317,61,3,50.683,3,38s10.317-23,23-23c1.706,0,3.407,0.201,5.072,0.577C31.03,16.047,31,16.52,31,17 c0,0.209,0.023,0.413,0.031,0.621C29.381,17.212,27.695,17,26,17C14.421,17,5,26.421,5,38s9.421,21,21,21s21-9.421,21-21 c0-1.695-0.212-3.381-0.621-5.031C46.587,32.977,46.791,33,47,33c0.48,0,0.953-0.03,1.423-0.072C48.799,34.593,49,36.294,49,38 C49,50.683,38.683,61,26,61z"></path>{" "}
                  <path d="M29,38c0-1.302-0.839-2.402-2-2.816V23h-2v12.184c-1.161,0.414-2,1.514-2,2.816c0,1.654,1.346,3,3,3 c0.462,0,0.894-0.113,1.285-0.301l7.008,7.008l1.414-1.414l-7.008-7.008C28.887,38.894,29,38.462,29,38z M25,38 c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1S25,38.552,25,38z"></path>{" "}
                  <path d="M56,35c-1.654,0-3,1.346-3,3c0,1.251,0.771,2.324,1.862,2.773c-0.627,6.584-3.499,12.781-8.152,17.527l1.428,1.4 c4.999-5.098,8.074-11.763,8.725-18.842C58.095,40.485,59,39.353,59,38C59,36.346,57.654,35,56,35z M56,39c-0.552,0-1-0.448-1-1 s0.448-1,1-1s1,0.448,1,1S56.552,39,56,39z"></path>{" "}
                  <path d="M6.283,16.733c4.658-4.321,10.651-6.978,16.949-7.579C23.686,10.237,24.755,11,26,11c1.654,0,3-1.346,3-3s-1.346-3-3-3 c-1.352,0-2.485,0.905-2.858,2.137c-6.771,0.624-13.214,3.489-18.218,8.13L6.283,16.733z M26,7c0.552,0,1,0.448,1,1s-0.448,1-1,1 s-1-0.448-1-1S25.448,7,26,7z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 2xl:pt-9">
            24x7 Support
          </h4>
          <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 2xl:text-base 2xl:leading-7">
            Access our always-available support for assistance and peace of
            mind.
          </p>
        </div>
      </div>
      <div className="md:hidden mt-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={false}
          autoplay={{
            delay: 2000,
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
          <SwiperSlide>
            <div className="group/item card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 2xl:p-12">
              <div className="relative inline-flex aspect-auto h-16 w-10 object-contain transition-all duration-500 group-hover/item:-translate-y-1 xl:h-[84px] xl:w-16 2xl:h-[110px] 2xl:w-[70px]">
                <svg
                  fill="#000000"
                  viewBox="0 0 128 128"
                  id="Layer_1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M109,55c0-29.8-24.2-54-54-54C25.2,1,1,25.2,1,55s24.2,54,54,54c13.5,0,25.8-5,35.2-13.1l25.4,25.4l5.7-5.7L95.9,90.2 C104,80.8,109,68.5,109,55z M55,101C29.6,101,9,80.4,9,55S29.6,9,55,9s46,20.6,46,46S80.4,101,55,101z"></path>{" "}
                      <path d="M25.6,30.9l6.2,5.1C37.5,29,46,25,55,25v-8C43.6,17,32.9,22.1,25.6,30.9z"></path>{" "}
                      <path d="M17,55h8c0-2.1,0.2-4.1,0.6-6.1l-7.8-1.6C17.3,49.8,17,52.4,17,55z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 2xl:pt-9">
                Explore Experiences
              </h4>
              <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 2xl:text-base 2xl:leading-7">
                Browse a variety of unique travel experiences, tailored for
                every preference.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group/item card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 2xl:p-12">
              <div className="relative inline-flex aspect-auto h-16 w-10 object-contain transition-all duration-500 group-hover/item:-translate-y-1 xl:h-[84px] xl:w-16 2xl:h-[110px] 2xl:w-[70px]">
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="3"
                  stroke="#000000"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M31.74,7.19,13.36,14.85a1,1,0,0,0-.62.93V32.11h0A22.89,22.89,0,0,0,23.93,51.78l8.18,4.86,8.06-4.85a22.87,22.87,0,0,0,11.09-19.6V14.84a1,1,0,0,0-.65-.94L32.48,7.18A1,1,0,0,0,31.74,7.19Z"></path>
                    <polyline points="22.01 33.5 29.44 39.12 42.56 20.69"></polyline>
                  </g>
                </svg>
              </div>
              <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 2xl:pt-9">
                Secure &amp; Reliable Booking
              </h4>
              <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 2xl:text-base 2xl:leading-7">
                Experience hassle-free booking with our trusted and secured
                platform.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group/item card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 2xl:p-12">
              <div className="relative inline-flex aspect-auto h-16 w-10 object-contain transition-all duration-500 group-hover/item:-translate-y-1 xl:h-[84px] xl:w-16 2xl:h-[110px] 2xl:w-[70px]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M10.6456 18.6327L11.3278 16.1316C11.4069 15.8415 11.4464 15.6965 11.3714 15.5983C11.2963 15.5 11.146 15.5 10.8454 15.5H8.90212C8.50324 15.5 8.30379 15.5 8.2324 15.3712C8.16101 15.2424 8.26671 15.0733 8.47812 14.735L10.0219 12.265C10.2333 11.9267 10.339 11.7576 10.2676 11.6288C10.1962 11.5 9.99676 11.5 9.59788 11.5H7.19371C6.87716 11.5 6.71888 11.5 6.64405 11.3962C6.56921 11.2924 6.61927 11.1422 6.71937 10.8419L9.38604 2.84189C9.44104 2.67688 9.46854 2.59438 9.53401 2.54719C9.59948 2.5 9.68645 2.5 9.86038 2.5H15.6169C16.0084 2.5 16.2042 2.5 16.276 2.62683C16.3478 2.75365 16.2471 2.92152 16.0457 3.25725L13.9543 6.74275C13.7529 7.07848 13.6522 7.24635 13.724 7.37317C13.7958 7.5 13.9916 7.5 14.3831 7.5H15.5C15.9363 7.5 16.1545 7.5 16.2236 7.6382C16.2927 7.77639 16.1618 7.95093 15.9 8.3L14.1 10.7C13.8382 11.0491 13.7073 11.2236 13.7764 11.3618C13.8455 11.5 14.0637 11.5 14.5 11.5H16.4682C16.9166 11.5 17.1408 11.5 17.2091 11.641C17.2774 11.782 17.1385 11.9579 16.8607 12.3098L11.5204 19.0741C10.9293 19.8229 10.6337 20.1973 10.4514 20.1053C10.2691 20.0134 10.3946 19.5531 10.6456 18.6327Z"
                      stroke="#222222"
                    ></path>{" "}
                    <path
                      d="M19.5 4L18 6H20L18.5 8"
                      stroke="#2A4157"
                      stroke-opacity="0.24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M6.5 16L5 18H7L5.5 20"
                      stroke="#2A4157"
                      stroke-opacity="0.24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 2xl:pt-9">
                Instant Confirmation
              </h4>
              <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 2xl:text-base 2xl:leading-7">
                Get immediate booking confirmations for swift and efficient
                travel planning.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group/item card-gradient flex flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 lg:p-7 2xl:p-12">
              <div className="relative inline-flex aspect-auto h-16 w-10 object-contain transition-all duration-500 group-hover/item:-translate-y-1 xl:h-[84px] xl:w-16 2xl:h-[110px] 2xl:w-[70px]">
                <svg
                  fill="#000000"
                  viewBox="0 0 64 64"
                  id="Layer_1_1_"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M46,22h-6.671l5.557-6.352C45.604,14.828,46,13.775,46,12.685V12.5c0-2.481-2.019-4.5-4.5-4.5S37,10.019,37,12.5V14h2v-1.5 c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5v0.185c0,0.606-0.22,1.19-0.619,1.646L37,21.624V24h9V22z"></path>{" "}
                      <path d="M54,24h2v-3h2v-2h-2V8h-2.618L48,18.764V21h6V24z M50.118,19L54,11.236V19H50.118z"></path>{" "}
                      <path d="M50.405,32.627C57.596,31.061,63,24.653,63,17c0-8.822-7.178-16-16-16c-7.653,0-14.061,5.404-15.627,12.595 C29.608,13.207,27.807,13,26,13C12.215,13,1,24.215,1,38s11.215,25,25,25s25-11.215,25-25C51,36.193,50.793,34.392,50.405,32.627z M47,3c7.72,0,14,6.28,14,14s-6.28,14-14,14s-14-6.28-14-14S39.28,3,47,3z M44.961,37H43v2h1.949 c-0.235,4.484-2.024,8.553-4.847,11.688l-1.375-1.375l-1.414,1.414l1.375,1.375c-3.135,2.824-7.204,4.612-11.688,4.847V55h-2v1.949 c-4.484-0.235-8.553-2.024-11.688-4.847l1.375-1.375l-1.414-1.414l-1.375,1.375C9.074,47.553,7.286,43.484,7.051,39H9v-2H7.051 c0.235-4.484,2.024-8.553,4.847-11.688l1.375,1.375l1.414-1.414l-1.375-1.375c3.135-2.824,7.204-4.612,11.688-4.847V21h2v-1.961 c1.438,0.076,2.862,0.318,4.255,0.72c1.156,6.611,6.374,11.829,12.986,12.986C44.642,34.138,44.884,35.562,44.961,37z M26,61 C13.317,61,3,50.683,3,38s10.317-23,23-23c1.706,0,3.407,0.201,5.072,0.577C31.03,16.047,31,16.52,31,17 c0,0.209,0.023,0.413,0.031,0.621C29.381,17.212,27.695,17,26,17C14.421,17,5,26.421,5,38s9.421,21,21,21s21-9.421,21-21 c0-1.695-0.212-3.381-0.621-5.031C46.587,32.977,46.791,33,47,33c0.48,0,0.953-0.03,1.423-0.072C48.799,34.593,49,36.294,49,38 C49,50.683,38.683,61,26,61z"></path>{" "}
                      <path d="M29,38c0-1.302-0.839-2.402-2-2.816V23h-2v12.184c-1.161,0.414-2,1.514-2,2.816c0,1.654,1.346,3,3,3 c0.462,0,0.894-0.113,1.285-0.301l7.008,7.008l1.414-1.414l-7.008-7.008C28.887,38.894,29,38.462,29,38z M25,38 c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1S25,38.552,25,38z"></path>{" "}
                      <path d="M56,35c-1.654,0-3,1.346-3,3c0,1.251,0.771,2.324,1.862,2.773c-0.627,6.584-3.499,12.781-8.152,17.527l1.428,1.4 c4.999-5.098,8.074-11.763,8.725-18.842C58.095,40.485,59,39.353,59,38C59,36.346,57.654,35,56,35z M56,39c-0.552,0-1-0.448-1-1 s0.448-1,1-1s1,0.448,1,1S56.552,39,56,39z"></path>{" "}
                      <path d="M6.283,16.733c4.658-4.321,10.651-6.978,16.949-7.579C23.686,10.237,24.755,11,26,11c1.654,0,3-1.346,3-3s-1.346-3-3-3 c-1.352,0-2.485,0.905-2.858,2.137c-6.771,0.624-13.214,3.489-18.218,8.13L6.283,16.733z M26,7c0.552,0,1,0.448,1,1s-0.448,1-1,1 s-1-0.448-1-1S25.448,7,26,7z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <h4 className="pb-3 pt-8 text-lg font-bold leading-[34px] text-gray-dark lg:text-xl xl:pt-6 2xl:pt-9">
                24x7 Support
              </h4>
              <p className="text-sm font-normal capitalize leading-[22px] text-gray-light xl:leading-6 2xl:text-base 2xl:leading-7">
                Access our always-available support for assistance and peace of
                mind.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HomeExperienceSection;
