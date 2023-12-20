import "./HomePage.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import AboutMe from './../../components/Sections/AboutMe'
import Contacts from './../../components/Sections/Contacts'
import Packages from './../../components/Sections/Packages'
import { useState } from "react";

function HomePage() {
  const [element, setElement] = useState('')
 
  const scrollToComponent = (id) => {
    console.log(id)
    console.log(document)
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log('scroll bitch2')
    }
  };

  const handleScrollClick = (id) => {
 
    if (scrollToComponent) {
      scrollToComponent(id);
      setElement(id)
    }
  };
  return (
    <div className="bg-white">
       <Navbar scrollToComponent={scrollToComponent} />
      <AboutMe id='AboutMe'/>
      <Contacts id='Contacts'/>
      <Packages id='Packages'/>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
