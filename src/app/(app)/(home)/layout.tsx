
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import {Category} from '@/payload-types'
import SearchFilters from './search-filters'
import { CustomCategory } from './types'

interface Props {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: "categories",
    depth: 1,  // populate subcategories
    pagination: false,
    where: {
      parent: {
        exists: false
      }
    },
    sort:"name"
  })

  const formatedData : CustomCategory[]= data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      //because of depth 1 we are conindent "doc " will be type of category
      ...(doc as Category),
      subcategories:undefined,
    }))
  }))

console.log(data,formatedData)



  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <SearchFilters data={formatedData}/>
      <div className='flex-1 bg-[#F4F4f0]'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
