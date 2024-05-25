import React from 'react'
import Logoimg from './logo-1 1 (2).png';
import VectorImg from './Vector 2.png';
import GroupInsideImg from './Group.png';
import { Link } from 'react-router-dom';

function Navbers() {
  return (
    <div>
       <nav className="bg-[#101D2E] p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          {/* Logo */}
          <div className=" flex">
           <img src={Logoimg} alt='' className=''/><span className="text-black  font-bold"></span>
          </div>

          {/* Navigation Links (Hidden on small screens) */}
          <div className="hidden md:flex space-x-4">
            <a href="/home" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            {/* <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a> */}
            <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>


            <a href="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="/languages" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Languages</a>
            <a href="/Careers" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Career</a>
            <a href="/blog" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
            <a href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>

            <button className='text-white bg-cyan-600 rounded-full '>info@lettercrafts.org</button>
            <button className='text-white bg-cyan-600 rounded-full '>+65 67110135</button>




          </div>

          {/* Menu Button (Hidden on medium screens and above) */}
          <div className="md:hidden">
            <button
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {/* Hamburger Icon (Three horizontal lines) */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links (Visible on small screens when menu is open) */}
        

          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="text-cyan-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#" className="text-cyan-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#" className="text-cyan-600 block px-3 py-2 rounded-md text-base font-medium">Case</a>
              <a href="#" className="text-cyan-600 block px-3 py-2 rounded-md text-base font-medium">Decode Specialist</a>
              <a href="#" className="text-cyan-600 block px-3 py-2 rounded-md text-base font-medium">Blog</a>
              <button className='text-white bg-cyan-600 '>Request Queot</button>




              

            </div>
          </div>
          
      </div>
    </nav>
    {/* <div>
        <img src={VectorImg} alt='' className='w-[1548.32px] h-[570px]' />
        <h1 className="absolute inset-0 flex-col top-[184px] left-20 text-white text-4xl font-bold">
        LetterCraftsT 
        <p className='text-0xl top-10'>Professional translators delivering High Quality, </p>
          <p>Fast & Affordable translation services in  🇸🇬 Singapore.</p>

      </h1>
        <h1 className='h-[Hug (274px)] w-[Fixed (473px)] top-[784px] left-[140px] text-justify border-gray-50 '>
          LetterCrafts 
        </h1>
        {GroupInsideImg}1548.32px 
        <img src={ GroupInsideImg} alt='' className='absolute top-[50px] right-0 h-[500px] w-[688px] m-4'/>
        

    </div> */}
    </div>
  )
}

export default Navbers
