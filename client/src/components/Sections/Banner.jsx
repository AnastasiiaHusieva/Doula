import { useEffect, useState } from "react";

function Banner(id) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id={`AboutMe`}>
      {/* {isMobile && <p>YOOOOOOOOO</p>} */}
      <div className="wavy-border-container">
        <img className='min-w-full' src="/photos/Icons/Doula Logo.jpg" alt="Logo" />
        <img className='min-w-full' src="/photos/background.png" alt="Logo" />
      </div>
    </div>
  );
}

export default Banner;