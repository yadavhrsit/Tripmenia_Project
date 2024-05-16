import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import questions from "../assets/questions.webp";
import whatsapp from "../assets/icons/whatsapp.png";
import BookingForm from "../Components/BookingForm";
import PhoneBookingModal from "../Components/PhoneBookingModal";
function PackagePage() {
  const { id } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [date, setDate] = useState(null);
  const [guests, setGuests] = useState(0);
  const [guestsCounter, setGuestsCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [openBookingForm, setOpenBookingForm] = useState(false);
  const [openPhoneBookingForm, setPhoneOpenBookingForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/packages/viewpackagedetail/${id}`
        );
        const data = await response.json();
        setPackageData(data);
      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    setTotalPrice(packageData?.specialPrice * guests);
  }, [packageData, guests]);

  if (!packageData) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="px-4 lg:px-14 pt-2 lg:pt-24">
          <div className="container-fluid w-full 3xl:!px-12">
            <div className="relative -mx-4 mb-8 sm:-mx-6 md:-mx-0 md:mt-4 lg:mb-14 lg:mt-6">
              <div className="grid h-[260px] grid-cols-1 grid-rows-2 gap-0 overflow-hidden transition-all duration-300 sm:h-[320px] md:h-[400px] md:grid-cols-[1fr_0.5fr] md:gap-1 md:rounded-xl lg:h-[500px] xl:h-[600px] xl:gap-2 3xl:h-[700px] 3xl:gap-3">
                <div className="relative row-start-1 row-end-3 h-full cursor-pointer">
                  <img
                    alt="pic"
                    className="object-cover"
                    sizes="(min-width: 320) 100vw, 100vw"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent",
                    }}
                    src={packageData.images[0]}
                  />
                </div>
                <div className="relative hidden h-full cursor-pointer md:block">
                  <img
                    alt="pic"
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    sizes="(min-width: 320) 100vw, 100vw"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent",
                    }}
                    src={packageData.images[1]}
                  />
                </div>
                <div className="relative hidden h-full cursor-pointer md:block">
                  <img
                    alt="pic"
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    sizes="(min-width: 320) 100vw, 100vw"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent",
                    }}
                    src={packageData.images[2]}
                  />
                </div>
              </div>
              <button
                type="button"
                className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-2.5 py-1 text-xs rounded-md bg-transparent border border-gray-300 hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-900/30 absolute bottom-3 right-3 !bg-white px-2 py-1.5 text-sm !font-bold leading-4 text-gray-dark md:bottom-5 md:right-5 xl:py-2 2xl:px-3 2xl:text-base 3xl:bottom-8 3xl:right-8 3xl:px-4 3xl:leading-6 4xl:px-5 4xl:py-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="mr-2 h-3 w-3"
                >
                  <g fill="currentColor">
                    <path d="M2.5 0h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm0 4.5h-2A.5.5 0 0 0 0 5v2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 3 7V5a.5.5 0 0 0-.5-.5zm0 4.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM7 0H5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 7 0zm0 4.5H5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zM7 9H5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 7 9zm4.5-9h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm0 4.5h-2A.5.5 0 0 0 9 5v2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 12 7V5a.5.5 0 0 0-.5-.5zm0 4.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"></path>
                  </g>
                </svg>
                View <span className="hidden px-1 lg:block"> more </span> photos
              </button>
            </div>
            <div className="flex justify-between gap-5 lg:gap-8 xl:gap-12 4xl:gap-16">
              <div className="w-full">
                <div className="flex justify-between border-b border-gray-lighter pb-6 md:pb-8 2xl:pb-10">
                  <div>
                    <p className="text-gray-dark"></p>
                    <h2 className="md:text-h2 font-bold text-gray-dark mt-2 !text-xl !leading-7 md:!text-[26px] md:!leading-10 2xl:!text-[28px] 4xl:!text-3xl">
                      {packageData.packageName}
                    </h2>
                    <ul
                      className="flex items-center gap-8 px-4 text-xs font-normal leading-4 text-gray-dark md:mt-4 xl:text-[15px] list-disc"
                      style={{
                        color: "rgb(102, 102, 102)",
                        fontFamily:
                          'halyard-text, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                      }}
                    >
                      <li className="p-0">Instant Confirmation</li>
                      <li className="p-0">Mobile Ticket</li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="relative md:hidden">
                      <div>
                        <button
                          className="h-6 w-6 rounded-full border-none outline-none hover:ring-2 hover:ring-gray-lighter"
                          id="headlessui-menu-button-:r0:"
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-1 hidden items-center gap-3 bg-zinc-200 hover:bg-black rounded-full md:flex 3xl:gap-6">
                      <button
                        type="button"
                        className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-2.5 py-1 text-xs rounded-full bg-transparent border border-gray-300 hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-900/30 !border-none !bg-gray-lightest !p-4 text-gray-dark hover:!bg-gray-dark hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-auto w-5"
                        >
                          <path
                            fill="currentColor"
                            d="M18.507 16.143c-1.15 0-2.186.497-2.905 1.287l-6.467-4.006a3.906 3.906 0 0 0 0-2.848l6.467-4.006a3.92 3.92 0 0 0 2.905 1.286 3.933 3.933 0 0 0 3.929-3.928A3.933 3.933 0 0 0 18.507 0a3.933 3.933 0 0 0-3.928 3.928c0 .503.096.983.268 1.425L8.38 9.358a3.92 3.92 0 0 0-2.905-1.286A3.933 3.933 0 0 0 1.547 12a3.933 3.933 0 0 0 3.928 3.928c1.15 0 2.186-.496 2.905-1.286l6.467 4.005a3.912 3.912 0 0 0-.268 1.425A3.933 3.933 0 0 0 18.507 24a3.933 3.933 0 0 0 3.929-3.928 3.933 3.933 0 0 0-3.929-3.928ZM16.011 3.928a2.499 2.499 0 0 1 2.496-2.496 2.499 2.499 0 0 1 2.496 2.496 2.499 2.499 0 0 1-2.496 2.496 2.499 2.499 0 0 1-2.496-2.496ZM5.475 14.496A2.499 2.499 0 0 1 2.98 12a2.499 2.499 0 0 1 2.496-2.496A2.499 2.499 0 0 1 7.971 12a2.499 2.499 0 0 1-2.496 2.496Zm10.536 5.576a2.499 2.499 0 0 1 2.496-2.496 2.499 2.499 0 0 1 2.496 2.496 2.499 2.499 0 0 1-2.496 2.495 2.499 2.499 0 0 1-2.496-2.495Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: packageData.description }}
                />

                <section className="py-5 xl:py-7 mt-2">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="md:text-h3 font-bold text-gray-dark mb-3 text-xl capitalize md:mb-2 md:!text-[22px] 2xl:!text-2xl">
                        Still have questions?
                      </h3>
                      <p className="mb-8 leading-6 text-gray">
                        Message us for personalized itineraries, and vacation
                        planning straight to you.
                      </p>
                      <button
                        type="button"
                        className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-8 py-2.5 text-base rounded-md bg-transparent border border-gray-300 hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-900/30 w-full !border-gray-dark !px-4 !py-[8px] !font-bold text-gray-dark hover:bg-gray-dark hover:text-white hover:bg-black md:w-auto md:border-gray lg:!px-[28px] lg:!py-[14px]"
                      >
                        Chat now
                      </button>
                    </div>
                    <div className="relative hidden h-40 w-64 md:block">
                      <img
                        alt="questions"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="h-full w-full object-contain"
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
                        sizes="(min-width: 320) 100vw, 100vw"
                        src={questions}
                      />
                    </div>
                  </div>
                </section>
              </div>
              <div className="hidden w-full max-w-sm pb-11 lg:block xl:max-w-md 3xl:max-w-lg">
                <div className="sticky top-32 4xl:top-40">
                  <form
                    noValidate=""
                    className="rounded-xl border border-gray-lighter bg-white p-8 shadow-card"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xl text-gray-dark xl:text-[14px]">
                        <span className="line-through">
                          AED {packageData.price}
                        </span>
                        <span className="ml-2 font-bold xl:text-[20px]">
                          AED {packageData.specialPrice}
                        </span>
                        <span className="ml-2 bg-green-500 text-white p-1 rounded font-bold xl:text-[15px]">
                          Save{" "}
                          {parseInt(
                            ((packageData.price - packageData.specialPrice) /
                              packageData.price) *
                              100
                          )}
                          %
                        </span>
                      </p>
                    </div>
                    <div className="relative mt-6 grid gap-3 rounded-lg border border-gray-lighter">
                      <span className="absolute left-4 top-3 inline-block scale-75 text-sm font-semibold uppercase text-gray-dark">
                        Select A Date
                      </span>
                      <div className="">
                        <label className="block text-base font-bold text-gray-dark"></label>
                        <div className="react-datepicker-wrapper">
                          <div className="react-datepicker__input-container">
                            <div className="flex flex-col mt-0 [&amp;>label>div]:!p-0 mt-2">
                              <label className="block text-base font-bold leading-7">
                                <div className="relative">
                                  <input
                                    spellCheck="false"
                                    placeholder="Add date"
                                    className="block peer w-full bg-transparent font-normal focus:outline-none  transition duration-200 disabled:bg-gray-100 disabled:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200 px-4 py-2 text-sm h-10 lg:h-11 2xl:h-12 leading-[40px] lg:leading-[44px] 2xl:leading-[48px] rounded-md bg-transparent border border-gray-300 read-only:border-gray-300 read-only:focus:ring-0 placeholder:text-gray-500 not-read-only:hover:enabled:border-gray-1000 focus:border-gray-1000 not-read-only:focus:enabled:border-gray-1000 focus:ring-gray-900/20 border-0 !text-base text-gray-dark !h-16 pt-5"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                  />
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div data-headlessui-state="">
                          <div className="relative">
                            <div
                              id="headlessui-listbox-button-:r6:"
                              aria-haspopup="listbox"
                              aria-expanded="false"
                              data-headlessui-state=""
                            >
                              <button
                                type="button"
                                onClick={() => setGuestsCounter(!guestsCounter)}
                                className="flex h-16 w-full cursor-pointer items-center justify-between rounded-b-lg border-t border-gray-lighter bg-white px-4 py-2.5 text-left uppercase text-gray-dark focus:outline-none xl:py-3"
                              >
                                <span className="block">
                                  {guests} <span className="ml-2">Guests</span>
                                </span>
                                <span className="transition-transform duration-200 rotate-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4 font-bold text-gray"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                            </div>
                            <ul
                              className={`${
                                guestsCounter ? "absolute" : "hidden"
                              } left-0 mt-1 grid w-full grid-cols-1 gap-3 rounded-lg border border-gray-lighter bg-white p-6 text-base shadow-lg ring-1 ring-gray-lightest`}
                              aria-labelledby="headlessui-listbox-button-:Rcejffff5f5ta:"
                              aria-orientation="vertical"
                              id="headlessui-listbox-options-:Rkejffff5f5ta:"
                              role="listbox"
                              tabIndex="0"
                              data-headlessui-state="open"
                            >
                              <div className="flex w-full items-center justify-between">
                                <div className="  text-sm xl:text-base">
                                  <h5 className="font-bold text-gray-dark">
                                    Guests
                                  </h5>
                                </div>
                                <div className="flex items-center gap-4">
                                  <button
                                    type="button"
                                    className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-2.5 py-1 text-xs rounded-md bg-transparent border border-gray-300 hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-900/30 !rounded-full !p-2"
                                    onClick={() =>
                                      setGuests(guests > 0 ? guests - 1 : 0)
                                    }
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      aria-hidden="true"
                                      className="h-4 w-4 xl:h-5 xl:w-5"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </button>
                                  <p className="text-4 text-center   font-normal text-gray">
                                    {guests}
                                  </p>
                                  <button
                                    type="button"
                                    className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-2.5 py-1 text-xs rounded-md bg-transparent border border-gray-300 hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-900/30 !rounded-full !p-2"
                                    onClick={() => setGuests(guests + 1)}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      aria-hidden="true"
                                      className="h-4 w-4 xl:h-5 xl:w-5"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={guests > 0 && date !== null ? false : true}
                      className={`inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-8 py-2.5 text-base rounded-lg border border-transparent  focus:ring-gray-900/30 text-gray-0 ${
                        guests > 0 && date !== null
                          ? "cursor-pointer bg-zinc-800 text-white hover:bg-black"
                          : "cursor-not-allowed bg-gray-100 border-gray-200 text-gray-400"
                      }  mt-4 w-full !py-[14px] text-base !font-bold uppercase tracking-widest`}
                      onClick={() => setOpenBookingForm(!openBookingForm)}
                    >
                      Book Now
                    </button>
                    <ul className="mt-3 xl:mt-5">
                      <li className="flex items-center justify-between py-1.5 text-base capitalize text-gray-dark first:pt-0 last:border-t last:border-gray-lighter last:pb-0">
                        <span className="font-normal">
                          AED {packageData.specialPrice} * {guests} tickets
                        </span>
                        <span className="font-bold">{totalPrice}</span>
                      </li>
                    </ul>
                    <div className="flex justify-center mt-2">
                      <strong className="hidden sm:block">OR</strong>
                    </div>
                    <button
                      type="button"
                      className={`inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-8 py-2.5 text-base rounded-lg border border-transparent bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 mt-4 w-full !py-[14px] text-base !font-bold uppercase tracking-widest hidden sm:block`}
                      style={{ backgroundColor: "green" }}
                    >
                      <a
                        className="flex justify-center items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://wa.me/971529720709?text=Hello%2C%20I'm%20interested%20in%20personalized%20itineraries%20and%20vacation%20planning.%20Here%20is%20the%20link%3A%20https%3A%2F%2Fwww.gulfania.com%2Flisting%2Ftop-attractions%2Fevening-desert-safari-dubai%2F65a66dd9093d05cb54f800ac"
                      >
                        <IoLogoWhatsapp size={20} />
                        Book on WhatsApp
                      </a>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-50 flex w-full items-center justify-between bg-white px-4 py-3 border-t-2 sm:px-6 lg:hidden">
          <div>
            <span className="line-through text-[12px]">{packageData.price}</span>
            <span>
              <span className="ml-2 bg-green-500 text-white p-1 rounded text-[10px]">
                Save{" "}
                {parseInt(
                  ((packageData.price - packageData.specialPrice) /
                    packageData.price) *
                    100
                )}
              </span>
            </span>
            <p className="font-bold text-gray-dark">
              AED {packageData.specialPrice} / ticket
            </p>
          </div>
          <a
            className="flex justify-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/971529720709?text=Hello%2C%20I'm%20interested%20in%20personalized%20itineraries%20and%20vacation%20planning.%20Here%20is%20the%20link%3A%20https%3A%2F%2Fwww.gulfania.com%2Flisting%2Ftop-attractions%2Ftickets-to-burj-khalifa-level-124-%26-125-dubai%2F65a65eac093d05cb54f7ff4f"
          >
            <img
              alt="whatsapp"
              loading="lazy"
              width="30"
              height="30"
              decoding="async"
              data-img="1"
              style={{ color: "transparent" }}
              src={whatsapp}
            />
          </a>
          <button
            type="submit"
            className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-8 py-2.5 text-base rounded-lg border border-transparent bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 font-semibold tracking-wide"
            onClick={() => setPhoneOpenBookingForm(!openPhoneBookingForm)}
          >
            Book Now
          </button>
        </div>
        {openBookingForm && (
          <BookingForm
            destination={packageData.packageName}
            packageId={packageData._id}
            guests={guests}
            amount={totalPrice}
            date={date}
            openBookingForm={openBookingForm}
          />
        )}
        {openPhoneBookingForm && (
          <PhoneBookingModal
            packageData={packageData}
            openBookingForm={openBookingForm}
            setOpenBookingForm={setOpenBookingForm}
            date={date}
            setDate={setDate}
            guests={guests}
            setGuests={setGuests}
            guestsCounter={guestsCounter}
            setGuestsCounter={setGuestsCounter}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        )}
      </>
    );
  }
}

export default PackagePage;
