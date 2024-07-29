import React from 'react';
import { MagnifyingGlassIcon,BellAlertIcon, UserIcon,CheckIcon,ChevronDownIcon } from '@heroicons/react/24/outline';

function NavbarTwo() {
  return (
    <nav className="bg-dark-blue-navbarTwo p-3 font-normal ml-14">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-white text-xl hover:text-white cursor-pointer space-x-7">
        
        <span className='text-sm'>Quick Filters: &nbsp;</span>
          
          <a href="#home" className="inline-flex w-100 border pl-1 pr-4 pt-1 pb-1 mr-0 rounded-md bg-blue-950 text-blue-300 border-dark-blue-navbarTwo border-l-white border-l-2 hover:text-white text-base">
          <CheckIcon className="h-5 w-5 my-1 mx-2 text-white border border-blue-400 rounded-full bg-blue-400" />
            All Payouts
          </a>
          

          <div className='inline-flex border pt-1 pb-1 pr-3 rounded-sm border-blue-950 bg-blue-950 border-l-2 border-l-orange-500'>
          <CheckIcon className="w-4 h-4 border rounded-full border-blue-700 bg-dark-blue-navbarTwo text-dark-blue-navbarTwo mx-3 mt-1" />
          <a href="#about" className="text-gray-300 hover:text-white text-base">Scheduled for next 2 days</a>
          </div>


          <div className='inline-flex border pt-1 pb-1 pr-3 rounded-sm border-blue-950 bg-blue-950 border-l-2 border-l-orange-500'>
          <CheckIcon className="w-4 h-4 border rounded-full border-blue-700 bg-dark-blue-navbarTwo text-dark-blue-navbarTwo mx-3 mt-1" />
          <a href="#about" className="text-gray-300 hover:text-white text-base">Queued(RazerpayX A/x) 1</a>
          </div>
         
        </div>

      

        <div className="space-x-4 tracking-wide font-bold text-sm">
        <button className='text-blue-300  py-2 px-5 w-70 flex items-center'>
          <span>View more filters</span> 
          <ChevronDownIcon className="w-5 h-5" />
          </button>
        
        </div>
      </div>
    </nav>
  )
}

export default NavbarTwo