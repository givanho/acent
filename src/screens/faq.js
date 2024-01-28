import React from 'react'
import  './faq.css'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { RiQuestionLine, RiSettings3Line } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { TbMailStar } from "react-icons/tb";
const Faq = () => {
  return (
    <>
    <div className='faq-all'>
    <div className="faq-us w-full">
    <h1 className='nunito faq-header'>
    Hello!, How can we help you?
     </h1>
    </div>
    
        </div>

        
    <div className="faq-help w-full">
    <h1 className='nunito faq-help-header'>
    Find the help you need
     </h1>
     <p className='nunito faq-text'>
     Our algorithm have collated popular questions and have already answered them for you so find 
     answers to your questions, feel free to reach us for further question, 
     inquires and complaint. We are here to help
     </p>
    </div>

<div className='faq-center'>
    <div className="faq-div">
      <div className="faq-single">
<div className='icons'> <RiQuestionLine size={32}/></div>
<h1 className='single-header nunito'>FAQs</h1>
<p className='single-content nunito'>Find answers to your questions here, if not feel free to reach us</p>
      </div>
      <div className="faq-single">
      <div className='icons'> <BiSupport size={32}/> </div>
<h1 className='single-header nunito'>Guides / Support</h1>
<p className='single-content nunito'>We have a dedicated team of support staff who are always online and 
  available to answer to your requests and attend to all your issues.</p>
      </div>
      <div className="faq-single">
      <div className='icons'> <RiSettings3Line size={32}/> </div>
<h1 className='single-header nunito'>Support Request</h1>
<p className='single-content nunito'>Reach us, we are available 24/7</p>
      </div>
    </div>
    </div>

    <div className="faq-help w-full">
    <h1 className='nunito faq-help-header'>
    Get Started
     </h1>
     <p className='nunito faq-text'>
     Get Started with us today, it is never too late
     </p>
    </div>


<div className="w-full px-4 pt-16">
<div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 closure">
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="disclobut flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium nunito focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
          <span  className={`${
              open ? 'open' : ''
            }  text-gray-700 text-base font-semibold`}>Do you have offline consultations also?</span>
          <ChevronUpIcon
            className={`${
              open ? 'rotate-180 transform open' : ''
            } h-5 w-5 text-gray-700`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pb-2 pt-4  nunito disclotext ">
        We provide offline consultation only to our highest investors. We shall be very glad to provide you 
        with the premium quality consultation for free. We do value your time and effort and we will do the utmost 
        to be of help to you as much as we can. Shall you have any questions turn to our support and schedule your consultation.
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  <Disclosure as="div" className="mt-2">
    {({ open }) => (
      <>
        <Disclosure.Button className="disclobut flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium nunito focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
          <span  className={`${
              open ? 'open' : ''
            }  text-gray-700 text-base font-semibold`}>Do you protect our data and personal information?</span>
          <ChevronUpIcon
            className={`${
              open ? 'rotate-180 transform open' : ''
            } h-5 w-5 text-gray-700`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pb-2 pt-4 nunito disclotext">
        Safety provision of our members is one of our top priorities and we work hard to ensure the 
        best experience investing with our company. There are several professionals in the company 
        that constantly monitor activity on our networks and limit access to your data. The servers are
         provided with DDoS protection handled by our specialists. 
        No doubt, SSL Security Certificates is a mandatory, all come with strongest SSL Encryption available.
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  <Disclosure as="div" className="mt-2">
    {({ open }) => (
      <>
        <Disclosure.Button className="disclobut flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium nunito focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
          <span  className={`${
              open ? 'open' : ''
            }  text-gray-700 text-base font-semibold`}>What are the probable risks in my investing funds?</span>
          <ChevronUpIcon
            className={`${
              open ? 'rotate-180 transform open' : ''
            } h-5 w-5 text-gray-700`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pb-2 pt-4 nunito disclotext">
        It would be rash to assert that it is not risky at all. Each kind of business is prone to some kind of risk. 
        Algo Trades Limited does the utmost to cut down on the risk. Have no doubt, 
        we've got enough experience in this field.
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  <Disclosure as="div" className="mt-2">
    {({ open }) => (
      <>
        <Disclosure.Button className="disclobut flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium nunito focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
          <span  className={`${
              open ? 'open' : ''
            }  text-gray-700 text-base font-semibold`}>How long have you been working in this field?</span>
          <ChevronUpIcon
            className={`${
              open ? 'rotate-180 transform open' : ''
            } h-5 w-5 text-gray-700`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pb-2 pt-4 nunito disclotext">
        Algo Trade Limited, incorporated in April 2022, is a trading and investment platform specializing in digital assets, 
        stocks, crypto, and forex. Despite being a newer company, Algo Trade has quickly established itself in the field of 
        algorithmic trading, utilizing pre-programmed algorithms for automated 
        trading solutions. They are committed to providing advanced and efficient trading options for traders and investors.
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  <Disclosure as="div" className="mt-2">
    {({ open }) => (
      <>
        <Disclosure.Button className="disclobut flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium nunito focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
          <span  className={`${
              open ? 'open' : ''
            }  text-gray-700 text-base font-semibold`}>What does Algo Trades correspond to?</span>
          <ChevronUpIcon
            className={`${
              open ? 'rotate-180 transform open' : ''
            } h-5 w-5 text-gray-700`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pb-2 pt-4 nunito disclotext">
        Algo Trades corresponds to Algorithmic Trading, an automated method of trading digital 
        assets, stocks, crypto, and forex using pre-programmed algorithms. Algo Trade Limited 
        employs sophisticated algorithmic trading techniques to provide efficient and automated 
        trading solutions for traders and investors, offering advanced tools and 
        technologies to enhance their trading experience.
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
 
</div>
</div>

<div className='in-touch'>
<h1 className='nunito touch-head'>Get in Touch</h1>
<div className='touch'>
  <div className='icon-cont'>
  <TbMailStar size={20} color='#1A81cf' />
  </div>
  <div style={{marginLeft:"15px"}}>
  <h2 className='nunito touch-sub'>Got a request, complaint, inquiry, then get in touch with us</h2>
  <button className='requestbut nunito'>
    Submit a request
  </button>
  </div>
</div>
</div>
</>
  )
}

export default Faq