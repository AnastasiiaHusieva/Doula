import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
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
      <div onClick={handleMenuClick} className=" flex justify-end  ">
        <button>
          <img
            className="w-5 p-1"
            src="/photos/Icons/instagram.png"
            alt="menu"
          />
        </button>
        <button>
          <img
            className="w-5 p-1"
            src="/photos/Icons/phone-call.png"
            alt="menu"
          />
        </button>
        <button>
          <img className="w-5 " src="/photos/Icons/menu.png" alt="menu" />
        </button>
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
