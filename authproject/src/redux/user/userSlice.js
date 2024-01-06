import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    isLoading : false,
    errors : null
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        signInStart :(state)=> {
                state.isLoading = true
        },
        signInSuccess :(state,action)=> {
            state.currentUser = action.payload,
            state.isLoading = false
            state.errors = null
    },
    signInFailure :(state,action)=> {
        // state.currentUser = action.payload,
        state.isLoading = false
        state.errors = action.payload
},
    }
})

export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;
export default userSlice.reducer;