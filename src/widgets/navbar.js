import {  useState, useEffect } from 'react'


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <>
     <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
    <div className="navbar-container">
      <div className="logo">Your Logo</div>
      <div className={`nav-links-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className={`nav-links ${isMobileMenuOpen ? 'show-mobile' : ''}`}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className= {`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div>
<button className=" px-4 py-2.5  text-white nunito  signbut mr-4"  >
    logIn
</button>
<button className="px-4 py-2.5  text-white nunito  signbut">
    Get Started
</button>
                </div> 
    </div>
  </nav>
        
 
       
    </>
  );
};

export default Navbar;
