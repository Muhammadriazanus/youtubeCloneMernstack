import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    video : 0,
    loading : false,
    error : false,
}
export const videoSlice = createSlice({
    name : "video",
    initialState,
    reducers:{
        fetchStart : (state)=>{
            state.loading = true;
        },
        fetchSuccess : (state,action)=>{
            state.loading = false;
            state.user = action.payload
        },
        fetchfailure : (state)=>{
            state.loading = false;
            state.error = true;
        },
        
    }
})
export const {fetchStart,fetchSuccess,fetchfailure} = videoSlice.actions
export default videoSlice.reducer;