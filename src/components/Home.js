import React from 'react'
// import { } from '@heroicons/react/24/outline';
// import { cis } from '@coreui/react';

function Home() {
  return (
    <div className='w-full h-screen bg-home-bg-color text-white py-4 ml-7'>
    <div className=" text-sm max-w-screen-2xl border rounded-md border-transparent mt-auto ml-10 mr-10 bg-blue-200 bg-opacity-10 p-6">
      These are test payouts and do not affect the actual balance. They are used only for the purpose of integrating events.
      <span className='text-blue-300'>&nbsp; Learn More</span>
      </div>

      <div className=" flex justify-between text-sm max-w-screen-2xl rounded-md border-gray-700 border-b mt-auto ml-10 mr-10 bg-home-bg-color py-4 px-4">

      <div className='inline-flex pt-3'>

      <input type="radio" name="custom-radio" id="radio1" className="hidden peer mr-2 pr-2" />
      <div className="w-5 h-5 border-2 border-gray-600 rounded-sm flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500">
      <svg className="hidden peer-checked:block w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 13l4 4L18 7"></path>
      </svg>
      </div>
      <span className='mx-2'>Showing 1-5 Payouts</span>

      <div className=' ml-5 flex items-center justify-center'>
        <input type="radio" />
        <span>Sort by</span><span className='text-blue-300'>&nbsp;Latest creation date</span>
      </div>

      </div>

      
      <div class='flex justify-center items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 mx-2">
    <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
      </svg>
      <button className='flex items-center px-4 border border-blue-400 bg-blue-950 bg-opacity-5 text-blue-400 py-1 mx-2'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path fill-rule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v8.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V2.75A.75.75 0 0 1 8 2Z" clip-rule="evenodd" />
      </svg>
        Export</button>

        <button className='text-white font-bold border rounded-sm border-blue-400 bg-blue-500 py-2 px-5 w-70 mx-3'>+ &nbsp;PAYOUT &nbsp; | &nbsp;^</button>
      </div>
      </div>


      <div className=" h-300 mx-8 border-b border-gray-600">
   {/* table header */}
  <div className="grid justify-items-center grid-cols-6 gap-4 py-2 text-gray-400">
    <div className="font-bold">CREATED AT</div>
    <div className="font-bold">AMOUNT</div>
    <div className="font-bold">STATUS</div>
    <div className="font-bold">CONTACT</div>
    <div className="font-bold">CREATED BY</div>
    <div className="font-bold">UTR</div>
  </div>

  {/* <!-- Table Rows --> */}
  <div className="space-y-2">
    
      <div className="grid grid-cols-6 gap-4 py-2 ">
        <div className=" p-2 flex items-center justify-center">Fri 9 Feb, 2:32PM</div>
        <div className=" p-2 flex items-center justify-center">&#8377;10000</div>
        <div className=" p-2 flex justify-center">
          <span className='-transparent bg-orange-600 text-yellow-300 rounded-full px-2 py-0.5 bg-opacity-20'>Queued</span>
        </div>
        <div className=" p-2 flex items-center justify-center">Jai</div>
        <div className=" p-2 flex items-center justify-center">Aditya Sharma</div>
        <div className=" p-2 flex items-center justify-center">--</div>
      </div>
  </div>
  <div className="space-y-2">
    
      <div className="grid grid-cols-6 gap-4 py-2 ">
        <div className=" p-2 flex items-center justify-center">Fri 9 Feb, 1:25PM</div>
        <div className=" p-2 flex items-center justify-center">&#8377;10000</div>
        <div className=" p-2 flex justify-center">
          <span className='-transparent bg-orange-600 text-yellow-300 rounded-full px-2 py-0.5 bg-opacity-20'>Queued</span>
        </div>
        <div className=" p-2 flex items-center justify-center">aman</div>
        <div className=" p-2 flex items-center justify-center">Aditya Sharma</div>
        <div className=" p-2 flex items-center justify-center">--</div>
      </div>
  </div>
  <div className="space-y-2">
    
      <div className="grid grid-cols-6 gap-4 py-2 ">
        <div className=" p-2 flex items-center justify-center">Fri 9 Feb, 12:32PM</div>
        <div className=" p-2 flex items-center justify-center">&#8377;10000</div>
        <div className=" p-2 flex justify-center">
          <span className='-transparent bg-orange-600 text-yellow-300 rounded-full px-2 py-0.5 bg-opacity-20'>Queued</span>
        </div>
        <div className=" p-2 flex items-center justify-center">lakshay</div>
        <div className=" p-2 flex items-center justify-center">Aditya Sharma</div>
        <div className=" p-2 flex items-center justify-center">--</div>
      </div>
  </div>
  <div className="space-y-2">
    
      <div className="grid grid-cols-6 gap-4 py-2 ">
        <div className=" p-2 flex items-center justify-center">Thu 8 Feb, 4:56PM</div>
        <div className=" p-2 flex items-center justify-center">&#8377;10000</div>
        <div className=" p-2 flex justify-center">
          <span className='-transparent bg-orange-600 text-yellow-300 rounded-full px-2 py-0.5 bg-opacity-20'>Queued</span>
        </div>
        <div className=" p-2 flex items-center justify-center">baldev</div>
        <div className=" p-2 flex items-center justify-center">Aditya Sharma</div>
        <div className=" p-2 flex items-center justify-center">--</div>
      </div>
  </div>
  <div className="space-y-2">
    
      <div className="grid grid-cols-6 gap-4 py-2 ">
        <div className=" p-2 flex items-center justify-center">Tue 6 Feb, 6:56PM</div>
        <div className=" p-2 flex items-center justify-center">&#8377;10000</div>
        <div className=" p-2 flex justify-center">
          <span className='-transparent bg-orange-600 text-yellow-300 rounded-full px-2 py-0.5 bg-opacity-20'>Queued</span>
        </div>
        <div className=" p-2 flex items-center justify-center">simba</div>
        <div className=" p-2 flex items-center justify-center">Aditya Sharma</div>
        <div className=" p-2 flex items-center justify-center">--</div>
      </div>
  </div>
</div>

  <div className='flex justify-end items-center relative right-10'>
    <select className="border-b border-gray-700 rounded-md p-2 text-white bg-dark-blue-navbarTwo my-3 w-34" defaultValue="10">
    {[...Array(10)].map((_, i) => (
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
     ))}
    </select>
    <span className='mx-2'>rows/pages</span>
  </div>

  <div className='fixed bottom-0 right-10 m-4 my-2'>
    <button className=' bg-bottom-button-color rounded-full p-2'>Need Help?</button>
  </div>
      
    </div>
  )
}

export default Home