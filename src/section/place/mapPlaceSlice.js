import { createSlice } from '@reduxjs/toolkit'

import places from "./data.json"

const initialState = {
    category: "all",

    places: places.places,
    hoverdPlaceID: "",

}

export const mapPlaceSlice = createSlice({
    name: 'place',
    initialState,
    reducers: {
        onCategoryChange: (state, action) => {


            if (action.payload === "all") {
                state.places = places.places
                state.category = "all"
            }
            else {
                state.places = places.places.filter((e) => (e.category === action.payload))
                state.category = action.payload
            }
        },

        onPlaceHover: (state, action) => {


            state.hoverdPlaceID = action.payload


        }

    },
})

export const { onCategoryChange, onPlaceHover } = mapPlaceSlice.actions

export default mapPlaceSlice.reducer