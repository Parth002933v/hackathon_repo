import { createSlice } from '@reduxjs/toolkit'

import places from "./collages.json"


const initialState = {
    category: "all",

    places: places.collages,
    hoverdPlaceID: "",

}

export const mapPlaceSlice = createSlice({
    name: 'place',
    initialState,
    reducers: {
        onCategoryChange: (state, action) => {


            if (action.payload === "all") {
                state.places = places.collages
                state.category = "all"
            }
            else {
                state.places = places.collages.filter((e) => (e.category === action.payload))
                state.category = action.payload
            }
        },

        onPlaceHover: (state, action) => {


            state.hoverdPlaceID = action.payload


        }
        ,
        updatePlaces: (state, action) => {

            state.category = action.payload
        }

    },
})

export const { onCategoryChange, onPlaceHover, updatePlaces } = mapPlaceSlice.actions

export default mapPlaceSlice.reducer