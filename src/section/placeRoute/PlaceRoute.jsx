import React from 'react'
import LeafLetMap from './components/LeafLetMap'

import Recommendation from './components/Recomendation';


export default function PlaceRoute() {

  return (
    // <div className=' h-screen w-screen'>
    // <div className='relative my-auto flex-grow'>
    //   <div className=' absolute order-2 lg:order-1 w-full lg:w-1/2 xl:w-2/5 h-1/2 lg:h-full py-6 px-4 overflow-auto'>
    //     <Recommendation />
    //   </div>
    //   <div className=''>
    //     <LeafLetMap />


    //   </div>
    // </div>


    <div className=' flex flex-col lg:flex-row justify-between w-full h-screen'>
      <div className=' order-2 lg:order-1 w-full lg:w-1/2 xl:w-2/5 h-1/2 lg:h-full py-6 px-4 overflow-auto'>
        <Recommendation />
      </div>
      <div className='order-1 lg:order-2 w-full lg:w-1/2 xl:w-3/5 h-1/2 lg:h-full py-6 px-6'>
        <LeafLetMap />

      </div>


    </div >

  )
}
