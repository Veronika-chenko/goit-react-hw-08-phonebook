import { createSlice } from "@reduxjs/toolkit";
import { singup, logIn, logOut, refreshUser } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => builder
        .addCase(singup.pending, (state) => state)
        .addCase(singup.fulfilled, (state, action) => {
            state.user = action.payload.user;//закинути користувача в state
            state.token = action.payload.token;
            state.isLoggedIn = true;
         })
        .addCase(singup.rejected, (state) => state)
        .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
         })
        .addCase(logOut.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;//only payload!!!
            state.isLoggedIn = true;
        })
})

export const authReducer = authSlice.reducer;

// token into state
// Bearer = ностель