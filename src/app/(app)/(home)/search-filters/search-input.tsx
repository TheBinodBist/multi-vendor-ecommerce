"use client"
import { Input } from '@/components/ui/input';
import { ListFilterIcon, SearchIcon } from 'lucide-react';
import React, { useState } from 'react'
import { CustomCategory } from '../types';
import CategoriesSidebar from './categories-sidebar';
import { Button } from '@/components/ui/button';

interface Props{
    disabled:boolean;
    data: CustomCategory[];
}



const SearchInput = ({disabled,data}:Props) => {
  const [isSidebarOpen,setIsSidebarOpen]=useState(false)

  return (
    <div className='flex items-center gap-4 w-full '>
      <CategoriesSidebar  data={data} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
        <div className='relative w-full'>
            <SearchIcon className=' absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500'/>
            <Input className='pl-8' placeholder='search products' />
        </div>
      {/* todo categories view all bitton */}
      {/* todo  add library button */}
      {/* todo :when clicked in Listfiler icon we wnatt */}
      <Button variant={"elevated"}
      className='size-12 shrink-0 lg:hidden'
      onClick={()=>setIsSidebarOpen(true)}>
        <ListFilterIcon/>
      </Button>
    </div>
  )
}

export default SearchInput
