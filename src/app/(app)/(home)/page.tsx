// app/(app)/(home)/page.tsx

"use client"
import { useQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client";

export default function Home(){
  const trpc = useTRPC();
  // This call will now resolve to the categoriesRouter
  const categories= useQuery(trpc.categories.getMany.queryOptions()); 

  return(
    <div>
      <p>is loading:{`${categories.isLoading}`}</p>
      <p>{JSON.stringify(categories.data,null,2)}</p>
    </div>
  )
}