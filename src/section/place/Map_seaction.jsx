import { useState } from 'react'

import Recomendation from "./component/Recomendation"
import MyMap2 from './component/MyMap2'

import { useSelector, useDispatch } from 'react-redux';


function MapSeaction() {
    const place = useSelector((state) => state.place);

    return (
        <div className='flex flex-col lg:flex-row justify-between w-full h-screen'>
            <div className='order-2 lg:order-1 w-full lg:w-1/2 xl:w-2/5 h-1/2 lg:h-full py-6 px-4 overflow-auto'>
                <Recomendation  />
            </div>
            <div className='order-1 lg:order-2 w-full lg:w-1/2 xl:w-3/5 h-1/2 lg:h-full py-6 px-6'>
                <MyMap2 />

            </div>


        </div>

        // <div className='relative w-full h-screen'>
        //     <MyMap2 />
        //     <DraggablePanel>
        //         <Recomendation />
        //     </DraggablePanel>
        // </div>

    )
}

export default MapSeaction


