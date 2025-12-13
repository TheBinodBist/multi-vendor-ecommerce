import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

import SearchFilters from './search-filters'
import { getQueryClient, trpc } from '@/trpc/server'

interface Props {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.categories.getMany.queryOptions(),
  )
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchFilters  />
      </HydrationBoundary>
      <div className='flex-1 bg-[#F4F4f0]'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
