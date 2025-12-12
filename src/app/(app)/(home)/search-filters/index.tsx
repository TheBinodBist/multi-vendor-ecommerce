import React from 'react'
import SearchInput from './search-input'
import Categories from './categories'
import { CustomCategory } from '../types'

// Ensure data is typed as an array
interface Props{
  data: CustomCategory[]; 
}

const SearchFilters = ({data}:Props) => {
  return (
    <div className='px-4 lg:px-12 py-8 border-b flex-col gap-4 w-full'>
        <SearchInput data={data} disabled={false} />
        
        <div className='hidden lg:block'>
            <Categories data={data}/>
        </div>
    </div>
  )
}

export default SearchFilters