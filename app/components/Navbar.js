"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
function Navbar() {
    const [isClick, setisClick]=useState(false);
    const toggleNavbar = ()=>{
        setisClick(!isClick);
    }
  return (
    <>
    <nav className='bg-white'>
        <div className='max-w-7xl h-24 mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='flex items-center justify-between h-full'>
        <div className='flex items-center'>
             <div className='flex-shrink-0'>
       <Link href='/' className='flex items-center space-x-2'>  <Image
      src="/images/numidiartslogo.png"
      className='mx-0'
      width={90}
      height={40}
      alt="Logo de Numidi Arts"/>
              <div className='flex flex-col leading-none'>
 
            <span className='text-gray-500 font-light text-sm tracking-wider'>Association </span>          
          <span className='text-red-700 font-semibold text-2xl leading-none'>Numidi </span>
          <span className='text-red-700 font-semibold text-2xl leading-none'>Arts </span>
</div>
    </Link>
        </div>
        </div>
         <div className='hidden md:block'>
             <div className='ml-5 flex items-center space-x-4'>

          <Link href='/' className='group relative text-gray-600 uppercase text-sm font-medium hover:font-semibold py-8'>
            Accueil
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
           <Link href='/about'className='group relative text-gray-600 uppercase text-sm font-medium hover:font-semibold py-8'>
            L&apos;association
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
           <Link href='/medias' className='group relative text-gray-600 uppercase text-sm font-medium hover:font-semibold py-8'>
            Médias            
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
           <Link href='/events' className='group relative text-gray-600 uppercase text-sm font-medium hover:font-semibold py-8'>
            Evénements
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
           <Link href='/contact' className='group relative text-gray-600 uppercase text-sm font-medium hover:font-semibold py-8'>
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </div>
        </div>
        <div className='md:hidden flex items-center'>
            <button className='inline-flex items-center justify-center p-2 rounded-md text-black  md:text-white hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
            {isClick ? (
                      <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      className="h-6 w-6"
                      stroke='currentColor'>
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12">
                            </path> </svg>
            ):(
            <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      className="h-6 w-6"
                      stroke='currentColor'>
                      <path strokeLinecap="round"
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16m-7 6h7">
                            </path> </svg>
            )}
            </button>
        </div>
    </div>
        </div>
        {isClick && (
            <div className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                     <Link href='/' className='block hover:bg-white hover:text-red-700 text-gray-600 uppercase text-sm font-medium hover:font-semibold rounded-lg p-4'>
            Accueil
            </Link>
       <Link href='/about' className='block hover:bg-white hover:text-red-700 text-gray-600 uppercase text-sm font-medium hover:font-semibold rounded-lg p-4'>            L&apos;association
        </Link>
       <Link href='/medias' className='block hover:bg-white hover:text-red-700 text-gray-600 uppercase text-sm font-medium hover:font-semibold rounded-lg p-4'>            Médias
        </Link>
       <Link href='/events' className='block hover:bg-white hover:text-red-700 text-gray-600 uppercase text-sm font-medium hover:font-semibold rounded-lg p-4'>            Evénements
            </Link>
       <Link href='/contact' className='block hover:bg-white hover:text-red-700 text-gray-600 uppercase text-sm font-medium hover:font-semibold rounded-lg p-4'>            Contact
            </Link>
                </div>
            </div>
        )}
    </nav>
    </>
  )
}

export default Navbar
