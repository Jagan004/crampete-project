
import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
    name:'counter',
    initialState:{
     value : 0,
    }
    ,
    reducers:{
increment:(state)=>{
    state.value += 1
    }
    ,
    decrement:(state)=>{
        state.value -= 1
        },
}
,

})

export const {increment,decrement} = cart.actions
export const selectCount = (state)=>state.counter.value
export default cart.reducer