import React, { useContext } from "react";
import "./Navbar.css";

function Navbar({ scrollToComponent }) {
  
  const handleScrollClick = (id) => {
    if (scrollToComponent) {
      scrollToComponent(id);
    }
  };

  return (
    <nav className="bg-beige-dark h-12 opacity-1">
      <button onClick={() => handleScrollClick('AboutMe')}>Über mich</button>
      <button onClick={() => handleScrollClick('Packages')}>Mein Angebot</button>
      <button onClick={() => handleScrollClick('Contacts')}>Kontakt</button>
      <Link to="/calendar">
          <button>My Calendar</button>
          {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
        </Link>
    </nav>
  );
}

export default Navbar;
