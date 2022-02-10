import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/config";
import { RootState } from "../store/configureStore";
import { LocationInfo } from "../types/LocationInfo";

export interface LocationState {
    loading: boolean,
    locations: LocationInfo[],
    error: string
}

const initialState: LocationState = {
    loading: false,
    locations: [],
    error: '',
}

export const loadLocations = createAsyncThunk(
    'locations/loadLocations',
    async (filter: string) => {
        const response = await axios.get(`${API_URL}/location/search`, {
            params: {
                query: filter
            },
        })
        console.log(response)
        const locations: LocationInfo[] = response.data

        return locations
    }
)

const locationSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadLocations.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(loadLocations.fulfilled, (state, action) => {
            state.loading = false
            state.locations = action.payload
        })

        builder.addCase(loadLocations.rejected, (state, action) => {
            state.locations = []
            state.loading = false
            state.error = 'Error occured while loading locations'
        })
    }
})

export const selectLocations = (state: RootState) => state.locations.locations
export const selectLocationLoading = (state: RootState) => state.locations.loading
export const selectLocationError = (state: RootState) => state.locations.error

export default locationSlice.reducer