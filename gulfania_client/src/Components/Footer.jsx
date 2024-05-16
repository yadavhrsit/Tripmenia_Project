import React from "react";
import HomeBottomBanner from "../Components/HomeBottomBanner";
import googleReview from "../assets/icons/google-rating.webp";
import tripAdvisor from "../assets/icons/tripadvisor.webp";
import mastercard from "../assets/icons/mastercard.png";
import applepay from "../assets/icons/apple-pay.png";
import googlepay from "../assets/icons/google-pay.png";
const Footer = () => {
  return (
    <>
      <HomeBottomBanner />

      <footer className="px-4 lg:px-6 xl:px-8 2xl:px-10">
        <div className="container-fluid mb-4">
          <div className="flex flex-col md:mb-6 md:flex-row md:items-center md:justify-between md:border-t md:border-t-gray-lighter md:pt-6 lg:mb-8 lg:pt-8">
            <div className="order-2 pt-4 md:order-none md:pt-0 lg:shrink-0">
              <p className="text-center text-sm font-normal capitalize leading-6 text-gray-dark md:text-left 3xl:text-base">
                <a
                  href="guflania.com"
                  rel="noReferrer"
                  target="_blank"
                  className="font-semibold hover:underline"
                >
                  @ Gulfania
                </a>
                , B33-129, SRTI Park, United Arab Emirates
              </p>
            </div>
            <nav className="order-1 border-b border-gray-lighter pb-4 md:order-none md:border-b-0 md:pb-0">
              <ul className="flex flex-wrap items-center justify-center md:justify-end">
                <li className="px-4 first:pl-0 last:pr-0 lg:px-6">
                  <a
                    target="blank"
                    rel="noReferrer"
                    href="https://www.google.com/search?sca_esv=601002590&amp;authuser=4&amp;sxsrf=ACQVn0_P61fVTiMOLAEaAltRFYMUL5xohw%3A1706079191342&amp;q=Gulfania&amp;stick=H4sIAAAAAAAAAONgU1I1qDBONU0zTUuzMLUwNDBMsUyyMqgwNUk0NUxJsjQ0MzdNs0w2X8TK4V6ak5aYl5kIAKJ5Juw0AAAA&amp;mat=CXgo46mwjo97&amp;ved=2ahUKEwiahqKhuPWDAxU6T6QEHYLmBBoQrMcEegQIDhAH#lrd=0x3e5f5ff858101d9b:0x54a51db91675f9c7,1,,,,"
                  >
                    <img
                      alt="google"
                      loading="lazy"
                      width="70"
                      height="70"
                      decoding="async"
                      data-img="1"
                      src={googleReview}
                      style={{ color: "transparent" }}
                    />
                  </a>
                </li>
                <li className="px-4 first:pl-0 last:pr-0 lg:px-6">
                  <a
                    target="blank"
                    href="https://www.tripadvisor.com/UserReviewEdit-g298064-d27141987-Gulfania-Sharjah_Emirate_of_Sharjah.html"
                  >
                    <img
                      alt="google"
                      loading="lazy"
                      width="70"
                      height="70"
                      decoding="async"
                      data-img="1"
                      src={tripAdvisor}
                      style={{ color: "transparent" }}
                    />
                  </a>
                </li>
                <li className="px-2 md:px-4 flex gap-2 first:pl-0 last:pr-0 lg:px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 192.756 192.756"
                    id="visa"
                  >
                    <g fillRule="evenodd" clipRule="evenodd">
                      <path fill="#fff" d="M0 0h192.756v192.756H0V0z"></path>
                      <path
                        fill="#315881"
                        d="M189.922 50.809c0-8.986-4.67-13.444-13.729-13.444H16.562c-4.528 0-7.854 1.203-10.048 3.679-2.476 2.477-3.68 5.661-3.68 9.765v91.138c0 4.104 1.204 7.217 3.68 9.764 2.548 2.477 5.803 3.68 10.048 3.68h159.631c9.059 0 13.729-4.527 13.729-13.443V50.809zm-13.729-11.321c7.5 0 11.322 3.821 11.322 11.321v91.138c0 7.57-3.822 11.32-11.322 11.32H16.562c-3.609 0-6.368-1.061-8.42-3.184-2.123-2.053-3.184-4.883-3.184-8.137V50.809c0-7.5 3.75-11.321 11.604-11.321h159.631z"
                      ></path>
                      <path
                        fill="#315881"
                        d="M17.835 44.724c-3.042 0-4.953.495-6.014 1.557-.92 1.203-1.344 3.184-1.344 6.085v19.741h171.802V52.366c0-5.165-2.549-7.642-7.643-7.642H17.835z"
                      ></path>
                      <path
                        fill="#dfa43b"
                        d="M10.477 140.107c0 5.234 2.476 7.924 7.358 7.924h156.801c5.094 0 7.643-2.689 7.643-7.924v-19.742H10.477v19.742z"
                      ></path>
                      <path
                        fill="#315881"
                        d="M67.367 80.528c0 .92-.142 1.627-.495 2.123l-12.383 21.582-.779-26.323H33.898l6.651 3.184c1.91 1.203 2.901 2.759 2.901 4.741l1.839 27.951h9.694l23.21-35.876H66.306c.707.637 1.061 1.627 1.061 2.618zM147.467 78.971l.777-1.062h-12.1c.424.424.566.637.566.778-.143.565-.426.92-.566 1.344l-17.619 32.124c-.424.566-.85 1.062-1.344 1.629h9.977l-.496-1.062c0-.92.496-2.617 1.557-5.023l2.123-3.963h10.26c.426 3.326.709 6.086.85 8.139l-.85 1.91h12.383l-1.84-2.689-3.678-32.125zm-7.36 19.742h-7.359l6.297-12.1 1.062 12.1zM109.539 76.07c-3.82 0-7.076 1.062-9.977 3.184-3.185 1.84-4.741 4.175-4.741 7.077 0 3.326 1.132 6.227 3.396 8.42l6.865 4.74c2.477 1.77 3.68 3.326 3.68 4.742 0 1.344-.639 2.547-1.84 3.467-1.203.92-2.549 1.344-4.246 1.344-2.477 0-6.722-1.768-12.595-5.023v6.58c4.599 2.76 9.058 4.176 13.373 4.176 4.105 0 7.572-1.133 10.545-3.68 3.184-2.336 4.74-5.094 4.74-8.137 0-2.549-1.133-4.883-3.68-7.36l-6.582-4.741c-2.191-1.769-3.395-3.326-3.395-4.528 0-2.759 1.627-4.175 4.953-4.175 2.264 0 5.59 1.274 10.047 3.963l1.346-6.864c-3.752-2.124-7.643-3.185-11.889-3.185zM83.217 113.785c-.142-1.486-.425-2.83-.567-4.246l8.987-29.011 2.123-2.618H80.811c.142.637.283 1.486.425 2.123 0 .637 0 1.416-.142 2.123l-8.986 28.728-1.84 2.902h12.949v-.001z"
                      ></path>
                    </g>
                  </svg>
                  <img
                    src={mastercard}
                    width={30}
                    height={30}
                    alt="mastercard"
                  />
                  <img src={applepay} width={30} height={30} alt="applepay" />
                  <img src={googlepay} width={30} height={30} alt="googlepay" />
                </li>

                <li className="px-4 first:pl-0 last:pr-0 lg:px-6 sm:block hidden">
                  <a
                    target="_blank"
                    rel="noReferrer"
                    href="https://www.instagram.com/gulfaniaofficial?igsh=MWtwYmhlb2NqaXV3MQ%3D%3D&amp;utm_source=qr"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 102 102"
                      id="instagram"
                    >
                      <defs>
                        <radialGradient
                          id="a"
                          cx="6.601"
                          cy="99.766"
                          r="129.502"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".09" stopColor="#fa8f21"></stop>
                          <stop offset=".78" stopColor="#d82d7e"></stop>
                        </radialGradient>
                        <radialGradient
                          id="b"
                          cx="70.652"
                          cy="96.49"
                          r="113.963"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset=".64"
                            stopColor="#8c3aaa"
                            stopOpacity="0"
                          ></stop>
                          <stop offset="1" stopColor="#8c3aaa"></stop>
                        </radialGradient>
                      </defs>
                      <path
                        fill="url(#a)"
                        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                      ></path>
                      <path
                        fill="url(#b)"
                        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                      ></path>
                      <path
                        fill="#fff"
                        d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                        transform="translate(-422.637 -426.196)"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="hidden md:block px-4 first:pl-0 last:pr-0 lg:px-6">
                  <a
                    className="block text-sm font-normal capitalize leading-4 text-primary 3xl:text-base"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="hidden md:block px-4 first:pl-0 last:pr-0 lg:px-6">
                  <a
                    className="block text-sm font-normal capitalize leading-4 text-primary 3xl:text-base"
                    href="/explore"
                  >
                    Explore
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
