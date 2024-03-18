import { configureStore } from '@reduxjs/toolkit';

import mapPlaceSlice  from '../section/place/mapPlaceSlice';
import  placeRouteSlice  from '../section/placeRoute/placeRouteSlice';

export const store = configureStore({
  reducer: {
    placeStore: mapPlaceSlice,
    
    collagesStore: placeRouteSlice
  },
})