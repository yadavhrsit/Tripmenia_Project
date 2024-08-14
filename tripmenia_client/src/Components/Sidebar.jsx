import React from "react";
import logo from "../assets/logo.png";
import {
  FaHome,
  FaCompass,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed inset-0 overflow-hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out`}
      role="dialog"
      aria-modal="true"
      style={{ zIndex: 51 }}
    >
      <div
        className={`fixed inset-0 cursor-pointer bg-gray-800 bg-opacity-60 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div className="fixed h-full w-full max-w-md translate-x-0 bg-white shadow-xl inset-y-0 left-0">
        <div className="flex items-center justify-between p-6">
          <a href="/" className="text-black">
            <img src={logo} alt="Tripmenia Logo" className="w-38 h-12" />
          </a>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md bg-transparent border-gray-300 hover:border-gray-900 focus:border-gray-900 focus:ring-gray-900"
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <ul className="pt-4 space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center gap-3 px-10 py-4 text-base capitalize text-gray-700 hover:bg-gray-200"
              >
                <FaHome />
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-10 py-4 text-base capitalize text-gray-700 hover:bg-gray-200"
              >
                <FaCompass />
                Explore
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-10 py-4 text-base capitalize text-gray-700 hover:bg-gray-200"
              >
                <FaPhone />
                Call Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-10 py-4 text-base capitalize text-gray-700 hover:bg-gray-200"
              >
                <FaWhatsapp />
                Whatsapp
              </a>
            </li>
            <li>
              <a
                href="mailto:booking@tripmenia.com"
                className="flex items-center gap-3 px-10 py-4 text-base capitalize text-gray-700 hover:bg-gray-200"
              >
                <FaEnvelope />
                Mail
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-10 py-4 text-base capitalize text-gray-700 hover:bg-gray-200"
              >
                <FaInstagram />
                Follow Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
