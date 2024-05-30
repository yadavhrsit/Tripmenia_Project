import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'; 
import PhoneBottomBar from "./Components/PhoneBottomBar";
import Sidebar from "./Components/Sidebar";
function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="min-h-screen relative">
      <Header />
      <Outlet />
      <Footer />
      <PhoneBottomBar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
    </div>
  );
}

export default Layout;