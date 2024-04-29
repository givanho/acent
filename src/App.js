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
import PrivateRoutes from "./layout/privateRoute";
import AdminRoute from "./layout/AdminRoute";
import DashLayout from "./screens/userDashboard";
import Withdrawal from "./dashboard/withdrawal";
import Deposit from "./dashboard/deposit";
import Transfer from "./dashboard/Transfer";
import Swap from "./dashboard/Swap";
import Payment from "./dashboard/Payment";
import Admin from "./screens/Admin"
import Profit from "./dashboard/Profit";
import Profile from "./dashboard/Profile";
import Plans from "./dashboard/Plans";
import Managed from "./dashboard/Managed";
import Transactions from "./dashboard/Transactions";
import Reset from "./screens/reset";
import ForgottenPassword from "./authentication/forgottenPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about-us" element={<About />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<SignIn />} />
      <Route path = "register" element={<SignUp />} />
      <Route path = "forgottenPassword" element={<ForgottenPassword />} />

      <Route path = 'reset' element ={<Reset/>}/>
    </Route>

    



    <Route element={<PrivateRoutes/>}>
              <Route path="dashboard" element={<DashLayout/>}>
                <Route path="withdrawal" element={<Withdrawal/>} />
                <Route path="deposit" element={<Deposit/>}>
                  <Route path = "payment" element={<Payment/>} />
                   </Route>
                <Route path="transfer" element={<Transfer/>}/>
                <Route path="swap" element={<Swap/>}/>
                <Route path="transactions" element={<Transactions/>}/>
                <Route path="profit" element={<Profit/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="buy-plans" element={<Plans/>}/>
                <Route path="managed-accounts" element={<Managed/>}/>


                </Route>
     </Route>


     <Route element = {<AdminRoute/>}>

<Route path="admin" element={<Admin/>} />

</Route>

    </>
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
