import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onPlaceHover, onNavigate } from "../placeRouteSlice"


export default function Recommendation() {

    const selector = useSelector((state) => state.collagesStore);

    return (
        <>
            <h1 className='text-xl lg:text-3xl font-sans font-medium'>All the collages around you</h1>
            <h4 className='font-sans text-xs font-thin'>Type</h4>

            <div className='flex-grow mt-5 w-full overflow-y-scroll p-1' style={{ height: "70vh" }}>

                {selector.collages.map((p) => (
                    <RecommendationCard placeData={p} placeName={p.name} description={p.description} url={p.url} key={p.id} />
                ))
                }
            </div>
        </>
    );
}

function RecommendationCard({ placeData }) {
    const dispatch = useDispatch()

    return (
        <div className="cursor-pointer max-lg:flex max-md:flex-col bg-white shadow-[0_8px_12px_-6px_rgba(0,0.6,0.6,0.6)] border w-full rounded-sm overflow-hidden justify-center mb-3"

            onMouseEnter={() => { dispatch(onPlaceHover(placeData.id)) }}
            onMouseLeave={() => { dispatch(onPlaceHover("")) }}
        >
            <img src={placeData.url} className="w-full h-[250px] bg-auto bg-center" alt="Card" />
            <div className="flex flex-col justify-between px-3 my-6 gap-3 font-">

                <div className='font-serif font-semibold'>
                    {placeData.name}
                </div>
                <div className='flex justify-between font-sans '>

                    <p>
                        {placeData.description}
                    </p>
                </div>

                <button type="button"
                    className="px-6 py-2 w-full mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#fba834] hover:bg-[#d19848] active:bg-blue-600"

                    onClick={() => { dispatch(onNavigate(placeData)) }}
                >
                    Navigate
                </button>
            </div>
        </div>
    );
}
