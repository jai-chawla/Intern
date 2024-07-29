import React, { useState } from 'react';
import { UserIcon, MagnifyingGlassIcon, BellAlertIcon } from '@heroicons/react/24/outline';
import logo from '../images/razorpay-icon.png'
// import { XIcon } from '@heroicons/react/24/solid'; // Cross icon for closing

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 h-full transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} bg-dark-blue-navbarOne text-white flex flex-col py-4 border-r border-gray-700 space-y-10`}>
      {/* Toggle Button */}
      <button
        className={`absolute top-4 right-4 ${isOpen ? 'w-8 h-8' : 'w-6 h-6'} bg-gray-700 rounded-full flex items-center justify-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ?<div> <Razor/><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M19.41 6.59L17 4.17 12 9.17 7 4.17 4.59 6.59 9.59 11.59 4.59 16.59 7 19 12 14 17 19l2.41-2.41-5-5 5-5z"/>
</svg> </div>
 : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>}
      </button>

      {/* Sidebar Content */}
      
        <div className="flex flex-col space-y-10  items-start text-sm ml-3">
          <a href="#" className="text-white hover:text-gray-400 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex mr-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>{isOpen&&<span>Home</span>}
          </a>

          <a href="#" className="text-white hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
            </svg>{isOpen&&<span>Payouts</span>}
          </a>

          <a href="#" className="text-white hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-flex mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8l-6-6H7z" />
            </svg>{isOpen&&<span>Account</span>}
          </a>

          <a href="#" className="text-white hover:text-gray-400 inline-flex">
            <UserIcon className="h-5 w-5 text-white mr-5" />{isOpen&&<span>People</span>}
          </a>
          <a href="" className='inline-flex'>
          <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 inline-flex mr-5" />{isOpen&&<span>Search</span>}
          </a>
          <a href="" className='inline-flex'>
          <BellAlertIcon className="h-5 w-5 text-orange-500 mr-5" />{isOpen&&<span>Alerts</span>}
          </a>
        </div>
        
        {isOpen&&<div className='absolute left-5 bottom-6'><span>Get RazorpayX Mobile</span></div>}
      
    </div>
  );
}

function Razor(){
  return(
    <div>
      <img src={logo} alt="fdfefef" className='fixed left-1 top-2 h-8 w-70' />
    </div>
  )
}

export default Sidebar;
