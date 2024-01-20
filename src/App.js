import React from "react";
import { AuthContextProvider } from "./context/context";
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'



import Home from "./screens/home";
import About from "./screens/about"
import Pricing from "./screens/pricing"
import Faq from "./screens/faq"
import Contact from "./screens/contact"
// import Navbar from "./widgets/navbar"


import RootLayout from '../src/layout/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)


function App() {
  return (
    <AuthContextProvider>
      {/* <div className="absolute inset-x-0 top-0 z-50 ">
    <Navbar/>
    </div>
    <div className="relative">
      <Home />
      </div> */}
      {/* <Navbar/> */}
      <RouterProvider router={router} />
   
    </AuthContextProvider>
  );
}

export default App;
