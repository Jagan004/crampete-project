import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:"cartItem",
    initialState:{
        item:[]
    }
    ,
    reducers:{
        addToCart:(state,action)=>{
            let check = state.item.findIndex((item)=>item.img == action.payload.img)

            if(check == -1)
            {
                state.item.push(action.payload)
            }
               
        }
        ,
        removeFromCart:(state,action)=>{
            state.item = state.item.filter(val => val.id != action.payload) 
        }
    }
})


export const {addToCart,removeFromCart} = cartSlice.actions
export const item = (state)=> state.cartItem.item
export default cartSlice.reducer