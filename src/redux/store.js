
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../components/cart/counter'
import  cartItemReducer  from '../components/cart/cartRedux'
import profileReducer from '../components/profile/profileLogics'
import  homeSliceReducer  from '../components/home/homeSearchLogics'
export default configureStore({
    reducer:{
        counter:cartReducer,
        cartItem:cartItemReducer,
        profile:profileReducer,
        searchFilter:homeSliceReducer
    }
})