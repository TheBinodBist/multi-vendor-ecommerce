import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import React from 'react'

interface Props{
    disabled:boolean;
}

const SearchInput = ({disabled}:Props) => {
  return (
    <div className='flex items-center gap-4 w-full pb-2'>
        <div className='relative w-full'>
            <SearchIcon className=' absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500'/>
            <Input className='pl-8' placeholder='search products' />
        </div>
      {/* todo categories view all bitton */}
      {/* todo  add library button */}
    </div>
  )
}

export default SearchInput
