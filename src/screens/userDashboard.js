import React,{  useState, useEffect } from 'react'
import { Outlet, NavLink, Link ,  useLocation} from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import logo from "../assets/logo.png";
import Modal from 'react-bootstrap/Modal';
import { GrClose } from "react-icons/gr";

import { FaIdCardClip } from "react-icons/fa6";
import { TbCoins } from "react-icons/tb";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { RiExchangeDollarLine } from "react-icons/ri";
import { RiTokenSwapLine } from "react-icons/ri";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import './dashboard.css'
import Withdrawal from '../dashboard/withdrawal';
import Deposit from '../dashboard/deposit';
import Profit from '../dashboard/Profit';
import Transactions from '../dashboard/Transactions';
import Swap from '../dashboard/Swap';
import Transfer from '../dashboard/Transfer';
import Managed from '../dashboard/Managed';
import Profile from '../dashboard/Profile';
import Plans from '../dashboard/Plans';
import Dash from '../dashboard/Dash';
import GoogleTranslate from '../widgets/GoogleTranslate'
import { UserAuth } from '../context/context'
import { collection, query, where ,doc, setDoc, onSnapshot,getDocs } from "firebase/firestore";
import { db } from '../context/firebase';


export default function DashLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
const [data, setData] = useState(null)
const { user, logout} = UserAuth();


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentContent, setCurrentContent] = useState(''); // State to track current content
    const location = useLocation();
    const currentRoute = location.pathname
  const handleLinkClick = (content) => {
    setCurrentContent(content); // Update current content when link is clicked
  };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


    function OpenMode () {
      setModalShow(true)
      
    }

    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
      <button onClick={() => setModalShow(false)}><GrClose size={32} color="black"/></button>
    
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
          <div className='modal-kyc'>
        <h2> KYC verification - Upload documents below to get verified. </h2>
        <p> Valid identity card. (e.g. Drivers licence, international passport or any government approved document).</p>

      
      <input type="file" 
      placeholder='No file Chosen' />
     

     <p>Passport Photograph </p>
      
      <input type="file" 
      placeholder='No file Chosen' />
      
      

   
      </div>
          </Modal.Body>
          <Modal.Footer>
         
          <button className='modbut'> Verify</button>
          </Modal.Footer>
        </Modal>
      );
    }
    




    //fetch data
    useEffect(() => {
      if (user) {
        //When the query snapshot changes (new data is added), 
       // the onSnapshot callback function is called. If the query snapshot is not empty, 
       // we update the state with the data from the first document in the snapshot.
  
        const q = query(collection(db, 'users'), where('userID', '==', user.uid));
  
        //The unsubscribe function returned by onSnapshot is used to 
        //remove the listener when the component unmounts, preventing memory leaks.
  
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            
            setData(doc.data());
  
           
          }
        });
  
        return () => {
          unsubscribe();
        };
      }
    }, []);

  return (
    <div className="root-layout">
       <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <header  >
      <nav className='navi'>
    <div className="navi-container">
   
    <div className="logo mr-4">
                {/* link to home */}
                <Link to="/" className="-m-1.5 p-1.5">
                  <img
                    className=" logosmall"
                    src={logo}
                    alt="ascentinvestments"
                  />
                   {/* <img
                    className=" logosmallest"
                    src={logo}
                    alt="ascentinvestments"
                  /> */}
                </Link>
              </div>

     <div className='mobileSigns' > 
      <button className='barsline'  onClick={toggleMenu} >
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </button>

<button className="hamburger" onClick={toggleSidebar}>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      
</button>

 <div>
 <button className='text-white nunito ' style={{display:"flex", alignItems:"center"}} onClick ={() => OpenMode()}>
  <div className='header-Linked' style={{marginInline:"5vw", display:"flex", alignItems:"center"}}>
     <FaIdCardClip  color='#fff' size={20}/>
<p>KYC</p>
  </div>
  </button>
</div>
<Link to="/dashboard">
<div className='header-Linked'>
     <BiSolidUserCircle color='#fff' size={32} />
<span className='text-white nunito '>{ data && data.firstname +" "+ data.lastname}</span>
  </div>

</Link>

 


</div>





<div className={`sidebart ${isOpen ? 'open' : ''}`}>
<div className="hamburger" onClick={toggleSidebar}>
<button>
        <GrClose color="#fff" size={32} style={{marginLeft:"10px", marginTop:"20px"}}/>
      
</button>
</div>
      <nav className="sidebart-nav">
      <div>
        <BiSolidUserCircle color='#fff' size={88} />
        <div className='balance'>
        <TbCoins color='#29302D' size={18}/>
          <p className='nunito' style={{color:'#273444' , fontSize:"14px" , fontWeight:600 , marginLeft:"7px"}} >$0.00</p>
        </div>
          </div>
      <ul className="iconrow">
        <NavLink
            to="/dashboard"
            className={currentRoute ==="/dashboard" ? "tabactive" : "tab"}
            onClick={() => {
              toggleSidebar();
              handleLinkClick(<Dash/>);
            }}
        
          >
            <div  className={currentRoute ==="/dashboard" ? "tabactive" : "tab"}>
            <IoHome size={28} color={currentRoute ==="/dashboard" ?'#29302D':"#7e8b9d"} />
            <p >Home</p>
            </div>
          </NavLink>

          <NavLink
            to="deposit"
            onClick={() => {
              toggleSidebar();
              handleLinkClick(<Deposit/>);
            }}
             className={currentRoute.includes("deposit") ? "tabactive" : "tab"}
          >
            <div  className={currentRoute.includes("deposit") ? "tabactive" : "tab"} >
            <FaArrowDownShortWide size={28} color={currentRoute.includes("deposit") ? "#29302D" : "#7e8b9d"} />
            <p >Deposit</p>
            </div>
          </NavLink>
        
      
        
          <NavLink
            to="withdrawal"
            className={currentRoute.includes("withdrawal") ? "tabactive" : "tab"}
            onClick={() => {
              toggleSidebar();
              handleLinkClick(<Withdrawal/>);
            }}
          >
            <div  className={currentRoute.includes("withdrawal") ? "tabactive" : "tab"}>
            <FaArrowUpWideShort size={28} color={currentRoute.includes("withdrawal") ?'#29302D':"#7e8b9d"} />
            <p >Withdraw</p>
            </div>
          </NavLink>
{/* start */}

          <NavLink
            to="profit"
            className={currentRoute.includes("profit") ? "tabactive" : "tab"}
            onClick={() => {
              toggleSidebar();
              handleLinkClick(<Profit/>);
            }}
          >
            <div  className={currentRoute.includes("profit") ? "tabactive" : "tab"}>
            <LuHistory size={28} color={currentRoute.includes("profit") ?'#29302D':"#7e8b9d"} />
            <p> Profit History </p>
            </div>
          </NavLink>
          <NavLink
            to="transactions"
            className={currentRoute.includes("transactions") ? "tabactive" : "tab"}
            onClick={() => {
              toggleSidebar();
              handleLinkClick(<Transactions/>);
            }}
        
          >
            <div  className={currentRoute.includes("transactions") ? "tabactive" : "tab"}>
            <RiExchangeDollarLine size={28} color={currentRoute.includes("transactions") ?'#29302D':"#7e8b9d"} />
            <p >Transactions</p>
            </div>
          </NavLink>
          <NavLink
            to="swap"
            className={currentRoute.includes("swap") ? "tabactive" : "tab"}
            onClick={() => {
              toggleSidebar();
              handleLinkClick(<Swap/>);
            }}
          >
            <div  className={currentRoute.includes("swap") ? "tabactive" : "tab"}>
            <RiTokenSwapLine size={28} color={currentRoute.includes("swap") ?'#29302D':"#7e8b9d"} />
            <p >Swap Crypto</p>
            </div>
          </NavLink>
       
          <NavLink
            to="transfer"
            className={currentRoute.includes("transfer") ? "tabactive" : "tab"}
            onClick={() => {
              toggleSidebar();
              handleLinkClick(<Transfer/>);
            }}
        
          >
            <div  className={currentRoute.includes("transfer") ? "tabactive" : "tab"}>
            <MdOutlineSwapHorizontalCircle size={28} color={currentRoute.includes("transfer") ?'#29302D':"#7e8b9d"} />
            <p >Tranfer Funds</p>
            </div>
          </NavLink>

          <NavLink
            to="managed-accounts"
            className={currentRoute.includes("managed-accounts") ? "tabactive" : "tab"}
            onClick={() => {
              toggleSidebar();
              handleLinkClick(<Managed/>);
            }}
        
          >
            <div  className={currentRoute.includes("managed-accounts") ? "tabactive" : "tab"}>
            <MdManageAccounts size={28} color={currentRoute.includes("managed-accounts") ?'#29302D':"#7e8b9d"} />
            <p >Managed Account</p>
            </div>
          </NavLink>

          <NavLink
            to="profile"
            className={currentRoute.includes("profile") ? "tabactive" : "tab"}
            onClick={() => {
              toggleSidebar();
              handleLinkClick(<Profile/>);
            }}
        
          >
            <div  className={currentRoute.includes("profile") ? "tabactive" : "tab"}>
            <ImProfile size={28} color={currentRoute.includes("profile") ?'#29302D':"#7e8b9d"} />
            <p >profile</p>
            </div>
          </NavLink>

          <NavLink
            to="buy-plans"
            className={currentRoute.includes("buy-plans") ? "tabactive" : "tab"}
            onClick={() => {
              toggleSidebar();
              handleLinkClick(<Plans/>);
            }}
          >
            <div  className={currentRoute.includes("buy-plans") ? "tabactive" : "tab"}>
            <FaHandHoldingUsd size={28} color={currentRoute.includes("buy-plans") ?'#29302D':"#7e8b9d"} />
            <p >Buy Plans</p>
            </div>
          </NavLink>

         

      </ul>
      </nav>
    </div>







    </div>
    <div className='navi-con'>
    <div className='navi-second'>

    </div>
    <div className="containerg">
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>

      <div>
        <BiSolidUserCircle color='#fff' size={88} />
        <div className='balance'>
<TbCoins color='#29302D' size={18}/>
<p className='nunito' style={{color:'#273444' , fontSize:"14px" , fontWeight:600 , marginLeft:"7px"}} >$0.00</p>
        </div>
          </div>
        
        {/* Sidebar content goes here */}
        <ul className="iconrow">
        <NavLink
            to="/dashboard"
            className={currentRoute ==="/dashboard" ? "tabactive" : "tab"}
            onClick={() => handleLinkClick(<Dash/>)}
        
          >
            <div  className={currentRoute ==="/dashboard" ? "tabactive" : "tab"}>
            <IoHome size={28} color={currentRoute ==="/dashboard" ?'#fff':"#7e8b9d"} />
            <p >Home</p>
            </div>
          </NavLink>

          <NavLink
            to="deposit"
            onClick={() => handleLinkClick(<Deposit/>)}
             className={currentRoute.includes("deposit") ? "tabactive" : "tab"}
          >
            <div  className={currentRoute.includes("deposit") ? "tabactive" : "tab"} >
            <FaArrowDownShortWide size={28} color={currentRoute.includes("deposit") ? "#fff" : "#7e8b9d"} />
            <p >Deposit</p>
            </div>
          </NavLink>
        
      
        
          <NavLink
            to="withdrawal"
            className={currentRoute.includes("withdrawal") ? "tabactive" : "tab"}
            onClick={() => handleLinkClick(<Withdrawal/>)}
        
          >
            <div  className={currentRoute.includes("withdrawal") ? "tabactive" : "tab"}>
            <FaArrowUpWideShort size={28} color={currentRoute.includes("withdrawal") ?'#fff':"#7e8b9d"} />
            <p >Withdraw</p>
            </div>
          </NavLink>
{/* start */}

          <NavLink
            to="profit"
            className={currentRoute.includes("profit") ? "tabactive" : "tab"}
            onClick={() => handleLinkClick(<Profit/>)}
        
          >
            <div  className={currentRoute.includes("profit") ? "tabactive" : "tab"}>
            <LuHistory size={28} color={currentRoute.includes("profit") ?'#fff':"#7e8b9d"} />
            <p> Profit History </p>
            </div>
          </NavLink>
          <NavLink
            to="transactions"
            className={currentRoute.includes("transactions") ? "tabactive" : "tab"}
            onClick={() => handleLinkClick(<Transactions/>)}
        
          >
            <div  className={currentRoute.includes("transactions") ? "tabactive" : "tab"}>
            <RiExchangeDollarLine size={28} color={currentRoute.includes("transactions") ?'#fff':"#7e8b9d"} />
            <p >Transactions</p>
            </div>
          </NavLink>
          <NavLink
            to="swap"
            className={currentRoute.includes("swap") ? "tabactive" : "tab"}
            onClick={() => handleLinkClick(<Swap/>)}
        
          >
            <div  className={currentRoute.includes("swap") ? "tabactive" : "tab"}>
            <RiTokenSwapLine size={28} color={currentRoute.includes("swap") ?'#fff':"#7e8b9d"} />
            <p >Swap Crypto</p>
            </div>
          </NavLink>
       
          <NavLink
            to="transfer"
            className={currentRoute.includes("transfer") ? "tabactive" : "tab"}
            onClick={() => handleLinkClick(<Transfer/>)}
        
          >
            <div  className={currentRoute.includes("transfer") ? "tabactive" : "tab"}>
            <MdOutlineSwapHorizontalCircle size={28} color={currentRoute.includes("transfer") ?'#fff':"#7e8b9d"} />
            <p >Tranfer Funds</p>
            </div>
          </NavLink>

          <NavLink
            to="managed-accounts"
            className={currentRoute.includes("managed-accounts") ? "tabactive" : "tab"}
            onClick={() => handleLinkClick(<Managed/>)}
        
          >
            <div  className={currentRoute.includes("managed-accounts") ? "tabactive" : "tab"}>
            <MdManageAccounts size={28} color={currentRoute.includes("managed-accounts") ?'#fff':"#7e8b9d"} />
            <p >Managed Account</p>
            </div>
          </NavLink>

          <NavLink
            to="profile"
            className={currentRoute.includes("profile") ? "tabactive" : "tab"}
            onClick={() => handleLinkClick(<Profile/>)}
        
          >
            <div  className={currentRoute.includes("profile") ? "tabactive" : "tab"}>
            <ImProfile size={28} color={currentRoute.includes("profile") ?'#fff':"#7e8b9d"} />
            <p >profile</p>
            </div>
          </NavLink>

          <NavLink
            to="buy-plans"
            className={currentRoute.includes("buy-plans") ? "tabactive" : "tab"}
            onClick={() => handleLinkClick(<Plans/>)}
        
          >
            <div  className={currentRoute.includes("buy-plans") ? "tabactive" : "tab"}>
            <FaHandHoldingUsd size={28} color={currentRoute.includes("buy-plans") ?'#fff':"#7e8b9d"} />
            <p >Buy Plans</p>
            </div>
          </NavLink>

         

      </ul>
      </div>
      <div className="contentss">
        {/* Main content goes here */}
        <div>
          {currentContent ?  <p>{currentContent}</p>:  <Dash/>}
        </div>
        <footer className ='flexfoot'>
        <h2 style={{color:'#000'}} className='nunito'> All Rights Reserved © Ascent Investment Ltd. 2024</h2>
        <GoogleTranslate />
        </footer>
       
      </div>
    </div>
    </div>
  </nav>
      
      </header>
      <main  >
        
      </main>
      
       
      
    </div>
  );
}
