import MyLocation from '@/components/MyLOcation'
import React from 'react'

interface PageProps {
  params: {
    id: string;
  };
}

function page({params} : PageProps) {
  return (
    <MyLocation params={params}/>
  )
}

export default page