import { createSlice } from "@reduxjs/toolkit";


export const Profile = createSlice({
    name: "profile",
    initialState: {
        user: [
            {
                houseNO_street: "no 4/856",
                area: "neelangarai",
                city: "chennai"
            }
        ]
    }
    ,
    reducers: {
        add: (state, action) => {
            state.user = [...state.user, {
                houseNO_street: action.payload.houseNO_street,
                area: action.payload.area,
                city: action.payload.city
            }]
        }
        ,
        remove: (state, action) => {
            state.user = state.user.filter(val => val.houseNO_street != action.payload)
        }
        ,
        update: (state, action) => {
            state.user = state.user.map((val)=>{
                if(val.houseNO_street === action.payload.id)
                { 
                    val.houseNO_street = action.payload.houseNO_street
                    val.area = action.payload.area
                    val.city = action.payload.city
                }
                return val
            })
        }
    }
})

export const { add, remove, update } = Profile.actions
export const profileState = (state) => state.profile.user
export default Profile.reducer
