// import { useEffect, useState } from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
// import { useLocation } from 'react-router-dom';
// const FloatingWhatsAppIcon = () => {
//   const [iconSize, setIconSize] = useState(34); // default size for larger screens

//   const updateIconSize = () => {
//     if (window.innerWidth < 768) { // Adjust breakpoint as needed
//       setIconSize(22);
//     } else {
//       setIconSize(34);
//     }
//   };
//   const location = useLocation()
//   const pathName = location.pathname
//   console.log(pathName)
 

//   useEffect(() => {
//     updateIconSize();
//     window.addEventListener('resize', updateIconSize);
//     return () => window.removeEventListener('resize', updateIconSize);
//   }, []);

//   return (
//     <a
//       href="https://wa.me/+971555872560?text=Hello%2C%20I'm%20interested%20in%20personalized%20vacation%20planning."
//       className="fixed z-50 bottom-20 left-1 md:bottom-2 md:right-2 md:left-auto bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <FaWhatsapp size={iconSize} />
//     </a>
//   );
// };

// export default FloatingWhatsAppIcon;
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const FloatingWhatsAppIcon = () => {
  const [iconSize, setIconSize] = useState(34); // default size for larger screens
  const location = useLocation();
  const pathName = location.pathname;

  const updateIconSize = () => {
    if (window.innerWidth < 768) { // Adjust breakpoint as needed
      setIconSize(34);
    } else {
      setIconSize(34);
    }
  };

  useEffect(() => {
    updateIconSize();
    window.addEventListener('resize', updateIconSize);
    return () => window.removeEventListener('resize', updateIconSize);
  }, []);

  // Conditional rendering based on the pathname
  if (pathName !== '/' && pathName !== '/explore') {
    return null;
  }

  return (
    <a
      href="https://wa.me/+971555872560?text=Hello%2C%20I'm%20interested%20in%20personalized%20vacation%20planning."
      className="fixed z-50 bottom-20  md:bottom-2 right-2 md:left-auto bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={iconSize} />
    </a>
  );
};

export default FloatingWhatsAppIcon;
