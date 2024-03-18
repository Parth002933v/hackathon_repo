import { createSlice } from '@reduxjs/toolkit';

import data from "./collages.json";


/// json Structure
// {
//     "collages": [
//         {
//             "id": "c1",
//             "name": "Veer Narmad South Gujarat University",
//             "url": "https://getmyuni.azureedge.net/college-images-test/veer-narmad-south-gujarat-university-surat/7188078994e347489f8bb01dc5fdcb78.jpeg",
//             "lat": 21.153784733512516,
//             "lng": 72.78309173645026,
//             "description": "Veer Narmad South Gujarat University is a well-known institution in Surat. It offers various undergraduate and postgraduate programs. The campus is located in the heart of the city."
//         },
//         {
//             "id": "c2",
//             "name": "Sardar Vallabhbhai National Institute of Technology, Surat",
//             "url": "https://www.newsilike.in/wp-content/uploads/Sardar-Vallabhbhai-National-Institute-of-Technology-768x485.jpg",
//             "lat": 21.166598816010055,
//             "lng": 72.78327286713694,
//             "description": "Sardar Vallabhbhai National Institute of Technology (SVNIT) is a premier engineering college in Surat. It offers B.Tech programs in various disciplines. SVNIT has a strong reputation for academic excellence and research."
//         },
//         {
//             "id": "c3",
//             "name": "AURO University",
//             "url": "https://images.static-collegedunia.com/public/college_data/images/appImage/1595333731Cover.jpeg",
//             "lat": 21.178583107812166,
//             "lng": 72.73533274124702,
//             "description": "AURO University is a private university in Surat. It offers undergraduate and postgraduate courses in various fields, including management, law, and liberal arts. The campus provides a conducive environment for holistic development."
//         }
//     ]
// }

const initialState = {
    collages: data.collages,
    hoverdPlaceID: "",
    navigateTo: {}

}

export const placeRouteSlice = createSlice({
    name: 'collages',
    initialState,
    reducers: {
        onPlaceHover: (state, action) => {
            state.hoverdPlaceID = action.payload

            console.log(action.payload)
        }
        ,
        onNavigate: (state, action) => {
            state.navigateTo = action.payload
        }
    },
})

export const { onPlaceHover, onNavigate } = placeRouteSlice.actions

export default placeRouteSlice.reducer