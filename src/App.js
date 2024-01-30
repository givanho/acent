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
import SignIn from "./authentication/signIn";
import SignUp from "./authentication/signUp";
import UserDashboard from "./screens/userDashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<SignIn />} />
      <Route path = "register" element={<SignUp />} />
      <Route path = "dashboard" element={<UserDashboard />} />
    </Route>
  )
)


function App() {
  return (
    <AuthContextProvider>
      
      <RouterProvider router={router} />
   
    </AuthContextProvider>
  );
}

export default App;
