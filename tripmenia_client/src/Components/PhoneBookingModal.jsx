import React, { useState, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
function PhoneBookingModal({
  packageData,
  setOpenBookingForm,
  openBookingForm,
  guests,
  setGuests,
  guestsCounter,
  setGuestsCounter,
  totalPrice,
  setTotalPrice,
  date,
  setDate,
}) {
  const [modalOpen, setModalOpen] = useState(true);
  const link = window.location.href;
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    // Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    setTotalPrice(packageData?.specialPrice * guests);
  }, [packageData, guests]);

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] h-full w-full overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-40 p-4 text-center ${
        modalOpen ? "" : "hidden"
      }`}
      role="dialog"
      aria-modal="true"
      onClick={handleCloseModal}
    >
      <div
        className="fixed inset-0 z-[9999] cursor-pointer opacity-100"
        aria-hidden="true"
      ></div>
      <span className="inline-block h-full align-middle" aria-hidden="true">
        {" "}
      </span>
      <div className="sr-only">
        <button
          type="button"
          className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-2.5 py-1 text-xs rounded-md border border-transparent bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 opacity-50 hover:opacity-80"
        >
          <span></span>
        </button>
      </div>
      <div className="relative z-[9999] inline-block w-full text-left align-middle sm:w-auto opacity-100 scale-100">
        <div
          className="container mt-8 px-4 !m-0 !p-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="m-auto w-full max-w-[496px] rounded-lg border border-gray-200 bg-white p-6 pt-9 sm:p-12">
            <form
              noValidate=""
              className="rounded-xl border border-gray-lighter bg-white p-8 shadow-card"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xl text-gray-dark xl:text-[14px]">
                  <span className="line-through">AED {packageData.price}</span>
                  <span className="ml-2 font-bold text-[15px]">
                    AED {packageData.specialPrice}
                  </span>
                  <span className="ml-2 bg-green-500 text-white p-1 rounded font-bold text-[15px]">
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
                              xmlns="https://www.w3.org/2000/svg"
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
                            <h5 className="font-bold text-gray-dark">Guests</h5>
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
                                xmlns="https://www.w3.org/2000/svg"
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
                                xmlns="https://www.w3.org/2000/svg"
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
                }  mt-4 w-full !py-[14px] text-base !font-bold uppercase tracking-widest ${
                  guestsCounter ? "mt-28" : ""
                }`}
                onClick={() => {
                  setOpenBookingForm(!openBookingForm);
                  setModalOpen(false);
                }}
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
                  href={`https://wa.me/+971525447735?text=Hello%2C%20I'm%20interested%20in%20personalized%20itineraries%20and%20vacation%20planning.%20Here%20is%20the%20link%3A%20${link}`}
                >
                  <IoLogoWhatsapp size={20} />
                  Book on WhatsApp
                </a>
              </button>
            </form>
            {/* End of Form Content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneBookingModal;
