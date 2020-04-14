import React from 'react'
import NavBar from './NavBar'

export default function Header () {
   return (
      <div className='bg-gray-200 py-4'>
         <h1>
            <img 
               className='h-24 mx-auto py-4' 
               src='/logo.png' 
               alt='oi' 
               height='60' 
            />
            <NavBar />
         </h1>
      </div>
   )
}