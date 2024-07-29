import React from 'react';
import { MagnifyingGlassIcon,BellAlertIcon, UserIcon } from '@heroicons/react/24/outline';


const NavbarOne = () => {
  return (
    <nav className="bg-dark-blue-navbarOne p-4 font-normal ml-20 ">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-white text-xl hover:text-white cursor-pointer space-x-7">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 pr-0 inline-block">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
        </svg>
        <span className='font-bold'>Payouts &nbsp; /</span>
          <a href="#home" className=" border pt-1 pb-1.5 px-2 mr-0 rounded-md bg-blue-950 text-blue-300 border-dark-blue-navbarOne hover:text-white text-base">Single</a>
          
          <div className='inline-flex'>
          <a href="#about" className="text-gray-300 hover:text-white text-base">Bulk</a>
          <span className="inline-flex items-center justify-center text-xs border border-green-600 bg-green-600 rounded-xl mx-2 my-0 px-2.5 pb-1 pt-1 h-4 mt-1.5" >NEW</span>
          </div>

          <a href="#services" className="text-gray-300 hover:text-white text-base">Tally</a>
          <a href="#contact" className="text-gray-300 hover:text-white text-base">Payout Links</a>
        </div>

      

        <div className="hidden md:flex space-x-4 text-base font-normal">
        <button className='text-blue-300 border rounded-sm border-blue-400 py-2 px-5 w-70'>+ &nbsp;PAYOUT &nbsp; | &nbsp;^</button>
        <MagnifyingGlassIcon className="h-5 w-5 text-blue-400 my-auto" />
        <BellAlertIcon className="h-5 w-5 text-orange-500 my-auto" />
        <UserIcon className="h-5 w-5 text-blue-500 my-auto" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarOne;
