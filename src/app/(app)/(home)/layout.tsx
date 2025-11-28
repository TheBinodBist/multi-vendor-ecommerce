import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import SearchFilter from './search-filter'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

interface Props{
    children: React.ReactNode
}


export default async function Layout({children}:Props) {
    const payload = await getPayload({
        config:configPromise,
    })
    const data = await payload.find({
        collection:"categories",
        depth:1,  //populate subcategories
        where:{
            parent:{
                exists:false
            }
        }
    })

    console.log(data);
  return (
    <div className='flex flex-col min-h-screen'>
        
        <Navbar/>
        <SearchFilter data={data} />
      <div className='flex-1 bg-[#F4F4f0]'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
