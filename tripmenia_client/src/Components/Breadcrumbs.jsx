import React from "react";

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="md:mt-24 lg:mt-2">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-4 h-4 mx-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
            <a
              href={item.link}
              className={`text-sm font-medium ${
                index === items.length - 1 ? "text-gray-900" : "text-gray-600"
              } hover:text-gray-800`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
