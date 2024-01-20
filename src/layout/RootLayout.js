import {  useState, useEffect } from 'react'

import { Outlet, NavLink, Link } from "react-router-dom";
import { IoDiamond } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import logo from "../assets/logo.png";


export default function RootLayout() {
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
                        color: isActive ? "#0056b3" : "white",
                      })}
                    >
                      <p className="nunito linking">About Us</p>
                    </NavLink>
                    <NavLink
                      to="pricing"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "white",
                      })}
                    >
                      <p className="nunito linking" >Pricing</p>
                    </NavLink>
                    <NavLink
                      to="faq"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "white",
                      })}
                    >
                      <p className="nunito linking">FAQ</p>
                    </NavLink>
                    <NavLink
                      to="contact"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "white",
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
<button className=" px-4 py-2.5  text-white nunito  signbut mr-4"  >
    logIn
</button>
<button className="px-4 py-2.5  text-white nunito  signbut">
    Get Started
</button>
    </div> 
<div className='mobileSign'>
<FaUser color='#1a81c5' size={32} style={{marginInline:32}}/>
<IoDiamond color='#1a81c5' size={32}/>
</div>

    </div>
  </nav>
        {/* <nav> */}

          {/* <div className="bg-opacity-0 h-64 w-full flex items-center justify-center" >
            <nav
              className="  navbar" 
              aria-label="Global"
            > */}
              {/* <div className="flex lg:flex-1">
                
                <Link to="/" className="-m-1.5 p-1.5">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="ascentinvestments"
                  />
                </Link>
              </div> */}
              {/* mobile menu */}
              {/* <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" */}
              {/* onClick={() => setMobileMenuOpen(true)} */}
              {/* > */}

              {/* </button>
          </div> */}

              {/* <div>
                <div className="flex ">
                  <div className="px-4 ">
                    <NavLink
                      to="about-us"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "white",
                      })}
                    >
                      <p className="nunito">About Us</p>
                    </NavLink>
                  </div>
                  <div className="px-4 ">
                    <NavLink
                      to="pricing"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "white",
                      })}
                    >
                      <p className="nunito" >Pricing</p>
                    </NavLink>
                  </div>
                  <div className="px-4 ">
                    <NavLink
                      to="faq"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "white",
                      })}
                    >
                      <p className="nunito">FAQ</p>
                    </NavLink>
                  </div>
                  <div className="px-4 ">
                    <NavLink
                      to="contact"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "white",
                      })}
                    >
                      <p className="nunito">Contact</p>
                    </NavLink>
                  </div>
                </div>
             
                
              </div>    */}
              {/* <div>
<button className=" px-4 py-2.5  text-white nunito  signbut mr-4"  >
    logIn
</button>
<button className="px-4 py-2.5  text-white nunito  signbut">
    Get Started
</button>
                </div> */}
            {/* </nav>
          </div> */}
        {/* </nav> */}
      </header>
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
}
