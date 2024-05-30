import { NavLink } from "react-router-dom";

function PhoneBottomBar({ isOpen, setIsOpen }) {
  
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid h-16 w-full grid-cols-3 items-center justify-between gap-2 bg-white shadow-menu-shadow md:hidden">
      <div className="flex items-center justify-center">
        <NavLink className="inline-block hover:text-red" to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6 ml-auto mr-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            ></path>
          </svg>
          <div>Home</div>
        </NavLink>
      </div>
      <div className="flex items-center justify-center">
        <NavLink className="inline-block hover:text-red" to={"/explore"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
            className="h-5 w-5 ml-auto mr-auto"
          >
            <path
              fill="curentColor"
              d="M16.196 11.253a5.28 5.28 0 0 0 1.137-3.254A5.334 5.334 0 1 0 12 13.333a5.28 5.28 0 0 0 3.253-1.138l3.61 3.609a.666.666 0 0 0 .942-.943l-3.61-3.608ZM8 7.999a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM19.333 0H.667a.667.667 0 1 0 0 1.333h18.666a.667.667 0 1 0 0-1.333ZM.667 9.333h4a.667.667 0 1 0 0-1.333h-4a.667.667 0 0 0 0 1.333ZM.667 13.333h4a.667.667 0 1 0 0-1.333h-4a.666.666 0 1 0 0 1.333ZM.667 17.333h14.666a.667.667 0 1 0 0-1.333H.667a.666.666 0 1 0 0 1.333ZM.667 5.333h4a.667.667 0 1 0 0-1.333h-4a.667.667 0 0 0 0 1.333Z"
            ></path>
          </svg>
          <div>Explore</div>
        </NavLink>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="inline-block hover:text-red"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6 rotate-180 ml-auto mr-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            ></path>
          </svg>
          <div>Menu</div>
        </button>
      </div>
    </div>
  );
}

export default PhoneBottomBar;
