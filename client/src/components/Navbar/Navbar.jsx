import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaInstagram } from "react-icons/fa";
import { FiPhoneCall, FiMenu } from "react-icons/fi";
import "./Navbar.css";

function Navbar({ scrollToComponent }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-beige-dark h-12 opacity-1">

      {isOpen && (
        <div className="">
          <div className="flex flex-col  bg-black ">
            <FaTimes onClick={handleMenuClick} />
            <button onClick={() => handleScrollClick("AboutMe")}>
              Über mich
            </button>
            <button onClick={() => handleScrollClick("Packages")}>
              Mein Angebot
            </button>
            <button onClick={() => handleScrollClick("Contacts")}>
              Kontakt
            </button>

            <Link to="/calendar">
              <button>My Calendar</button>
              {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
            </Link>
          </div>
        </div>
      )}
      <div onClick={handleMenuClick} className=" flex justify-end">
        <div className="flex justify-center items-center space-x-4 p-2">
          <div className="w-8 h-8 bg-beige-light text-beige-dark  rounded-full flex justify-center items-center">
            <FaInstagram />
          </div>
          <div className="w-8 h-8 bg-beige-light text-beige-dark rounded-full flex justify-center items-center">
            <FiPhoneCall />
          </div>
          <div className="w-8 h-8 bg-beige-light text-beige-dark rounded-full flex justify-center items-center">
            <FiMenu />
          </div>
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
    </nav>
  );
}

export default Navbar;
