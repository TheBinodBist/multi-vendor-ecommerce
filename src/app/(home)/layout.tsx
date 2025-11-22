import React from 'react'
import Navbar from './navbar'
import Footer from './footer'


interface Props{
    children: React.ReactNode
}


export default function Layout({children}:Props) {
  return (
    <div className='flex flex-col min-h-screen'>
        
        <Navbar/>
      <div className='flex-1 bg-[#F4F4f0]'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
