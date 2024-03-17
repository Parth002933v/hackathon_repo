import React from 'react';
import DropDownMenu from './dropDownMunu';
import { useSelector, useDispatch } from 'react-redux';
import { onPlaceHover } from '../mapPlaceSlice'



export default function Recommendation() {

    const place = useSelector((state) => state.place);

    return (
        <>
            <h1 className='text-3xl font-sans font-medium'>Hotels & places around you</h1>
            <h4 className='font-sans text-xs font-thin'>Type</h4>
            <DropDownMenu />
            <div className='flex-grow  mt-5 w-full overflow-y-scroll p-1 scroll-my-8' style={{ height: "80%" }}>

                {place.places.length === 0 ? (
                    <h1 className='text-center'>Please Select Category to find all the available places</h1>
                ) : (
                    place.places.map((p) => (
                        <RecommendationCard placeData={p} placeName={p.name} description={p.description} url={p.url} key={p.id} />
                    ))
                )}

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

                <button type="button" className="px-6 py-2 w-full mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
            </div>
        </div>
    );
}
