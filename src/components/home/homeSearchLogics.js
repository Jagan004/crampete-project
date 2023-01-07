import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name:"searchFilter",
    initialState:{
        userInput:""
    }
    ,
    reducers:{
        gettingValue:(state,action)=>{
            state.userInput =action.payload
        }
    }
})

export const {gettingValue} = homeSlice.actions
export const userValue = (state) => state.searchFilter.userInput
export default homeSlice.reducer