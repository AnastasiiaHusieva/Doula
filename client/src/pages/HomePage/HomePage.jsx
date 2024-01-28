import "./HomePage.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import Banner from '../../components/Sections/Banner'
import Contacts from './../../components/Sections/Contacts'
import Home from '../../components/Sections/Home'
import Wegbegleitung from '../../components/Sections/Wegbegleitung'
import Schwangerschaft from '../../components/Sections/Schwangerschaft'
import MitDerDoulaInOP from '../../components/Sections/MitDerDoulaInOP'
import StilleGeburten from '../../components/Sections/StilleGeburten'
import Geburtsphase from '../../components/Sections/Geburtsphase'
import Wochenbettphase from '../../components/Sections/Wochenbettphase'
import MotherBlessing from '../../components/Sections/MotherBlessing'
import Massage from '../../components/Sections/Massage'
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
       {/* <Banner id='Banner'/> */}
      <Home id='Home'/>
      <Wegbegleitung/>
      <Schwangerschaft/>
      <Geburtsphase/>
      <MitDerDoulaInOP/>
      <StilleGeburten/>
      <Wochenbettphase/>
      <MotherBlessing/>
      <Massage/>
      <Contacts id='Contacts'/>
      <Footer/>
    </div>
  );
}

export default HomePage;

