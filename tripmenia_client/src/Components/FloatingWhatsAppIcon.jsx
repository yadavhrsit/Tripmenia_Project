import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+971525447735?text=Hello%2C%20I'm%20interested%20in%20personalized%20vacation%20planning."
      className="hidden md:block fixed z-50 bottom-2 right-2 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={34} />
    </a>
  );
};

export default FloatingWhatsAppIcon;
