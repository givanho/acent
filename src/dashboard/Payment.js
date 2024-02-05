import React, {useState, useRef ,useEffect} from 'react'

import Modal from 'react-modal';
import ReactModal from 'react-modal';
import { GrClose } from "react-icons/gr";

const Payment =({item, number, ethPrice, bitPrice, errorMessage,})=>{

    
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal() {
      setIsOpen(false);
    }

      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    return(
        <div style={{width:"100%", marginInline:"auto", display:"flex", justifyContent:'center',flexDirection:"row"}}>
         <>
         <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
    </>



          <p> Make Payment {item} {number}</p> 
          <p> Make Payment {item} {ethPrice}</p> 
          <p> Make Payment {item} {bitPrice}</p> 
          <p> Make Payment {item} {errorMessage}</p> 
          
        </div>
    )
}
export default Payment