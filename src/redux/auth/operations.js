import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const singup = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => { 
        try {
            const res = await axios.post("/users/signup", credentials);
            setAuthHeader(res.data.token)
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('User is already exists');
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => { 
        try {
            const res = await axios.post("/users/login", credentials);
            setAuthHeader(res.data.token)
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Invalid username or password');
        }
    }
);

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
