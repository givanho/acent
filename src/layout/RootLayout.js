import {  useState, useEffect } from 'react'
import { Outlet, NavLink, Link , useLocation} from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { BiSolidUserCircle } from "react-icons/bi";
import Lottie from "lottie-react";
import logo from "../assets/logo.png";
import diamond from "../assets/diamonds.json"
import Footer from '../widgets/footer';


export default function RootLayout() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login" || location.pathname === "/register";


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
    <div className="root-layout">
      <header  >
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
    <div className="navbar-container">
    <div className="logo mr-4">
                {/* link to home */}
                <Link to="/" className="-m-1.5 p-1.5">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="ascentinvestments"
                  />
                </Link>
              </div>
      <div className={`nav-links-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className={`nav-links ${isMobileMenuOpen ? 'show-mobile' : ''}`}>
        <NavLink
                      to="about-us"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "#2c2c2c",
                      })}
                    >
                      <p className="nunito linking">About Us</p>
                    </NavLink>
                    <NavLink
                      to="pricing"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "#2c2c2c",
                      })}
                    >
                      <p className="nunito linking" >Pricing</p>
                    </NavLink>
                    <NavLink
                      to="faq"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "#2c2c2c",
                      })}
                    >
                      <p className="nunito linking">FAQ</p>
                    </NavLink>
                    <NavLink
                      to="contact"
                    
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "#2c2c2c",
                      })}
                    >
                      <p className="nunito linking">Contact</p>
                    </NavLink>
        </ul>
      </div>
      <div className= {`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className='deskSign'>
      <Link to="login">
<button className=" px-4 py-2.5  text-white nunito  signbut mr-4"  >
    logIn
</button>
</Link>
<Link to= "register">

<button className="px-4 py-2.5  text-white nunito  signbut">
    Get Started
</button>
</ Link>

    </div> 
<div className='mobileSign'>
<Link to="dashboard">

<BiSolidUserCircle color='#1a81c5' size={32} />
</Link>
<div style={{width:64, height:64}}>
  <Link to= "register">
    <Lottie animationData={diamond} loop={true} />
    </Link>
</div>

</div>

    </div>
  </nav>
      
      </header>
      <main className="relative" >
        <Outlet />
      </main>
      {!isLoginRoute && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}
