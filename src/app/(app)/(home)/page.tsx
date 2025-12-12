import { getQueryClient , trpc} from '@/trpc/server'
import { stringify } from 'querystring';
import React from 'react'

const Home = async () => {
  const queryClient = getQueryClient();
  const categories = await queryClient.fetchQuery(trpc.categories.getMany.queryOptions())
  return (
    <div>
      {JSON.stringify(categories,null,2)}
    </div>
  )
}

export default Home
