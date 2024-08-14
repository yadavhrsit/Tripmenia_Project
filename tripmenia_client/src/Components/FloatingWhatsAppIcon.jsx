import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+971525447735"
      className="hidden md:block fixed z-50 bottom-2 right-2 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={34} />
    </a>
  );
};

export default FloatingWhatsAppIcon;
