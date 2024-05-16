import React, { useState, useEffect, useRef } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import logo from "../assets/gulfania-logo.webp";
import { IoSearch } from "react-icons/io5";
import Sidebar from "./Sidebar";
import axios from "axios";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const modalRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    if (e.target.value) {
      const response = await axios.get(
        `http://localhost:5000/packages/view?search=${e.target.value}`
      );
      setResults(response.data);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (id) => {
    navigate(`/package/${id}`);
    setSearch("");
    setResults([]);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModalOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeModalOutside);
    return () => {
      document.removeEventListener("mousedown", closeModalOutside);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          location.pathname.includes("success") ? "block" : "fixed"
        } top-0 w-full z-50 px-0 bg-white transition-all duration-500 ${
          navbar ? "bg-white shadow" : "md:bg-transparent"
        }`}
      >
        <div className="mx-auto flex justify-between items-center p-0 md:p-8 ">
          <div className="flex pl-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hidden ${
                location.pathname.includes("explore") && "md:block"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link to="/" className="text-2xl font-bold">
              <img src={logo} alt="Gulfania" className="h-12 my-2 mx-4" />
            </Link>
          </div>
          <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
          <div className="hidden md:flex mx-4 p-1 w-1/3 rounded-full bg-white border-2 border-gray-300 text-gray-800">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-md p-2 grow border-0 ml-2 focus:outline-none font-bold"
              value={search}
              onChange={handleSearch}
            />
            {results.length > 0 && (
              <div className="absolute mt-10 bg-white border border-gray-300 rounded-md w-[90%] md:w-[30%]">
                {results.map((result) => (
                  <div
                    key={result._id}
                    className="p-4 hover:bg-gray-100 cursor-pointer text-gray-800"
                    onClick={() => handleSelect(result._id)}
                  >
                    {result.packageName}
                  </div>
                ))}
              </div>
            )}
            <button className="px-3 py-2 rounded-full bg-black text-white">
              <IoSearch />
            </button>
          </div>
          <div
            className={`hidden font-medium md:flex space-x-8 ${
              location.pathname.includes("explore") ||
              location.pathname.includes("success") ||
              location.pathname.includes("failure") ||
              navbar
                ? "text-black"
                : "text-white"
            } mr-6`}
          >
            <Link to="/" className="text-lg">
              Home
            </Link>
            <Link to="/explore" className="text-lg">
              Explore
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-lg mx-4" onClick={toggleModal}>
              <IoSearch />
            </button>
          </div>
        </div>
      </header>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center ">
          <div
            ref={modalRef}
            className="rounded-md px-8 py-2 max-w-md mx-4 h-fit"
          >
            <div className="flex justify-between items-center bg-white rounded-md">
              <input
                type="text"
                placeholder="Search..."
                className="absolute rounded-md p-2 flex-grow left-2 right-2 top-4"
                value={search}
                onChange={handleSearch}
                autoFocus
              />
              {results.length > 0 && (
                <div className="absolute top-10 left-2 right-2 bg-white border border-gray-300 rounded-md mt-2">
                  {results.map((result) => (
                    <div
                      key={result._id}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSelect(result._id)}
                    >
                      {result.packageName}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
