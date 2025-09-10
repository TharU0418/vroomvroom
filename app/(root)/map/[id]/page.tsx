import Location from '@/components/Location';
import React from 'react'

interface PageProps {
  params: {
    id: string;
  };
}

function page({params} : PageProps) {
  return (
    <Location params={params}/>
  )
}

export default page