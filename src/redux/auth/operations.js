import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

// info below is token from backend:
// POST @ /user/signup
// body: {name, email, password}
// credentials - {} з інфою, яку ввів користувач(from form)

export const singup = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => { 
        try {
            const res = await axios.post("/users/signup", credentials);
            setAuthHeader(res.data.token)
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// POST @ /user/login
// body: {name,password}

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => { 
        try {
            const res = await axios.post("/users/login", credentials);
            setAuthHeader(res.data.token)
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// POST @ /user/logout
// headers: Authorization: Bearer token

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => { 
        try {
            await axios.post('/users/logout');
            clearAuthHeader(); 
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// GET @ /user/current
// headers: Authorization: Bearer token
// with localStorage "token":
export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const { token } = thunkAPI.getState().auth;
        if (!token) {
            return thunkAPI.rejectWithValue('No valid token')
        };
        
        try {
            setAuthHeader(token);
            const res = await axios.get("/users/current")
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


// передаємо в Authorization-header - для послед запросов