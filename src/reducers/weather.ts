import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/config";
import { RootState } from "../store/configureStore";
import { LocationInfo } from "../types/LocationInfo";
import { WeatherInfo } from "../types/WeatherInfo";

export interface WeatherState {
    loading: boolean,
    weather_info: WeatherInfo | null,
    error: string,
    is_weather_open: boolean,
    selected_location: LocationInfo | null
}

const initialState: WeatherState = {
    loading: false,
    weather_info: null,
    error: '',
    is_weather_open: false,
    selected_location: null
}

export const loadWeather = createAsyncThunk(
    'locations/loadWeather',
    async (woeid: number) => {
        const response: any = await axios.get(`${API_URL}/location/${woeid}`)

        const weatherInfos: WeatherInfo[] = response.data.consolidated_weather
        if (weatherInfos.length > 0) {
            return weatherInfos[0]
        } else {
            return null
        }
    }
)

const weatherSlice = createSlice({
    name: 'weathers',
    initialState,
    reducers: {
        setOpenDetail: (state, action: PayloadAction<{open_status: boolean, selected_location: LocationInfo | null}>) => {
            state.selected_location = action.payload.selected_location
            state.is_weather_open = action.payload.open_status
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadWeather.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(loadWeather.fulfilled, (state, action) => {
            state.loading = false
            state.weather_info = action.payload
        })

        builder.addCase(loadWeather.rejected, (state, action) => {
            state.loading = false
            state.weather_info = null
            state.error = 'Error occured while load weather info'
        })
    }
})

export const selectOpenModal = (state: RootState) => state.weathers.is_weather_open
export const selectSelectedLocation = (state: RootState) => state.weathers.selected_location
export const selectWeatherDetail = (state: RootState) => state.weathers.weather_info
export const selectIsLoading = (state: RootState) => state.weathers.loading

export const { setOpenDetail } = weatherSlice.actions

export default weatherSlice.reducer