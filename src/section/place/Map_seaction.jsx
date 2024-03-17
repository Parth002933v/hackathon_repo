import { useState } from 'react'

import Recomendation from "./component/Recomendation"
import MyMap2 from './component/MyMap2'

function MapSeaction() {
    const places = [
        { name: 'Place 1', latitude: 40.7128, longitude: -74.006 },
        { name: 'Place 2', latitude: 34.0522, longitude: -118.243 },
        // Add more places as needed
    ];
    return (
        <div className='  flex  max-lg:flex-col-reverse justify-between w-[100%] '>
            <div className=' lg:w-[40%] max-lg:w-[100%]  h-screen py-6 px-4  '>
                <Recomendation />
            </div>
            <div className='   w-full h-screen max-lg:h-96 py-6 px-6 ' >

                {/* <MyMap /> */}
                <MyMap2 places={places} />
            
            </div>


        </div>

    )
}

export default MapSeaction


