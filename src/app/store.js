import { configureStore } from '@reduxjs/toolkit';

import mapPlaceSlice from '../section/place/mapPlaceSlice';

export const store = configureStore({
  reducer: {
    place: mapPlaceSlice
  },
})