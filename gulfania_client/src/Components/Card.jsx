import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Card({
  categoryName,
  packageName,
  price,
  specialPrice,
  discount,
  image,
  packageId,
}) {
  return (
    <div
      to={`/package/${packageId}`}
      className="max-w-sm h-fit rounded overflow-hidden px-2 hover:shadow-md bg-white cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <Link to={`/package/${packageId}`}>
        <img
          className="w-full rounded-xl object-cover"
          height={300}
          src={image}
          alt=" Alt Text"
        />
        <div className=" py-2">
          <div className="text-left text-xs mb-1 text-gray-600">
            {categoryName}
          </div>
          <p className="font-semibold text-left text-zinc-700 text-base mb-1">
            {packageName}
          </p>
          <p className="text-left flex items-center text-zinc-700 text-xs mb-1 ">
            <AiOutlineThunderbolt />
            <span className="ml-1">Instant Confirmation</span>
          </p>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-1">
              <p className="font-semibold text-left  text-zinc-600 text-xs mb-1 line-through ">
                {price}
              </p>
              <p className="text-gray-700 text-sm mb-1">{specialPrice}</p>
              <p className="text-white text-xs mb-1 text-nowrap bg-customPurple p-1 rounded">
                {discount}% OFF
              </p>
            </div>

            <div className="flex justify-between items-center gap-1 ">
              <IoLogoWhatsapp className="text-lg mb-2" />
              <Link
                to={`/package/${packageId}`}
                className="bg-black text-nowrap hover:bg-customPurple text-white font-bold py-1 px-2 mb-2 text-sm rounded"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
