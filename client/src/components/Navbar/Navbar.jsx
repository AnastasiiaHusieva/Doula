import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaInstagram } from "react-icons/fa";
import { FiPhoneCall, FiMenu } from "react-icons/fi";
import "./Navbar.css";

function Navbar({ scrollToComponent }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Set up an effect for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollClick = (id) => {
    if (scrollToComponent) {
      scrollToComponent(id);
    }
  };
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    console.log("it was clicked", isOpen);
  };
  return (
    <nav className="border-b border-beige-dark h-12">
      <div className=" flex justify-between">
      {!isMobile && (
       <div className="flex justify-center gap-3 ml-10">
         <button className="text-beige-dark" onClick={() => handleScrollClick("AboutMe")}>
              Über Mich
            </button>
            <button className="text-beige-dark" onClick={() => handleScrollClick("Packages")}>
              Mein Angebot
            </button>
            <button className="text-beige-dark" onClick={() => handleScrollClick("Contacts")}>
              Kontakt
            </button>
       </div>
     )}
        <div className="flex justify-center items-center space-x-4 p-2 pr-10">
          <div className="w-8 h-8 bg-beige-light text-beige-dark  rounded-full flex justify-center items-center">
            <FaInstagram />
          </div>
          <div className="w-8 h-8 bg-beige-light text-beige-dark rounded-full flex justify-center items-center">
            <FiPhoneCall />
          </div>
        {isMobile && (
            <div  onClick={handleMenuClick} className="w-8 h-8 bg-beige-light text-beige-dark rounded-full flex justify-center items-center">
            <FiMenu />
          </div>
        )}
        </div>

        {/* <button onClick={() => handleScrollClick("AboutMe")}>Über mich</button>
        <button onClick={() => handleScrollClick("Packages")}>
          Mein Angebot
        </button>
        <button onClick={() => handleScrollClick("Contacts")}>Kontakt</button> */}

        {/* <Link to="/calendar">
          <button>My Calendar</button>
          <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" />
        </Link> */}
      </div>
      {isMobile && isOpen && (
        <div className="">
          <div className="flex flex-col bg-beige-dark opacity-90 items-start p-3 pr-5">
            {/* <FaTimes className="text-beige-lightest" onClick={handleMenuClick} /> */}
            <button className="text-beige-lightest" onClick={() => handleScrollClick("AboutMe")}>
              Über mich
            </button>
            <button className="text-beige-lightest" onClick={() => handleScrollClick("Packages")}>
              Mein Angebot
            </button>
            <button className="text-beige-lightest" onClick={() => handleScrollClick("Contacts")}>
              Kontakt
            </button>

            <Link to="/calendar">
              <button className="text-beige-lightest">My Calendar</button>
              {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

