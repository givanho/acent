import { Outlet, NavLink, Link } from "react-router-dom";
import { Button,} from "@material-tailwind/react";

import logo from "../assets/logo.png";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header  className="absolute inset-x-0 top-0 z-50 ">
    
        <nav>

          <div className="bg-opacity-0 h-64" >
            <nav
              className="flex items-center  justify-between p-6 lg:px-8" 
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                {/* link to home */}
                <Link to="/" className="-m-1.5 p-1.5">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="ascentinvestments"
                  />
                </Link>
              </div>
              {/* mobile menu */}
              {/* <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" */}
              {/* onClick={() => setMobileMenuOpen(true)} */}
              {/* > */}

              {/* </button>
          </div> */}
{/* 
              <div>
                <div className="flex ">
                  <div className="px-6 ">
                    <NavLink
                      to="about-us"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "white",
                      })}
                    >
                      <p className="nunito">About Us</p>
                    </NavLink>
                  </div>
                  <div className="px-6 ">
                    <NavLink
                      to="pricing"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "white",
                      })}
                    >
                      <p className="nunito" >Pricing</p>
                    </NavLink>
                  </div>
                  <div className="px-6 ">
                    <NavLink
                      to="faq"
                      style={({ isActive }) => ({
                        color: isActive ? "#0056b3" : "white",
                      })}
                    >
                      <p className="nunito">FAQ</p>
                    </NavLink>
                  </div>
                  <div className="px-6 ">
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
            </nav>
          </div>
        </nav>
      </header>
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
}
