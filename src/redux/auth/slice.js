import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { singup, logIn, logOut, refreshUser } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error: null,
    },
    extraReducers: builder => builder
        .addCase(logOut.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        }).addMatcher(isAnyOf(singup.fulfilled, logIn.fulfilled), (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        }).addMatcher(isAnyOf(singup.rejected, logIn.rejected), (_, action) => {
            toast.error(action.payload);
        })
})

export const authReducer = authSlice.reducer;