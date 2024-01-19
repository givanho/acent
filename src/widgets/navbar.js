import  React,{ Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import '../index.css';
import logo from "../assets/logo.png"
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-opacity-0 h-64" >
       <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            {/* link to home */}
            <a href="#" className="-m-1.5 p-1.5">
             
              <img
                className="h-8 w-auto"
                src={logo}
                alt="ascentinvestments"
              />
            </a>
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
          
        <div>
        <BrowserRouter>
                <div
                   className='flex '
                >
                    <div className='mr-4 '>
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                          <p className='nunito' >Home</p>  
                        </NavLink>
                    </div>
                    <div className='mr-4' >
                        <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white"
                            })}
                        >
                             <p className="nunito" >About Us</p> 
                        </NavLink>
                    </div>
                    <div className='mr-4 '>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                          <p className="nunito" >Contact</p>  
                        </NavLink>
                    </div>
                </div>
              
            </BrowserRouter>
        </div>
          
        </nav>
        
        </div>
  )
}

export default Navbar