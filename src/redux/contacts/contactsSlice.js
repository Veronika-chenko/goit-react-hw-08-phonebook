import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { reducer } from "./reducers";
// 
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// 

const { fetchContactsSuccessReducer,
    addContactSuccessReducer,
    deleteContactsSuccessReducer,
    pendingReducer,
    rejectedReducer,
    fulfilledReducer } = reducer;

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        // showModal: false,
    },
    extraReducers: builder => builder
        .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
        .addCase(addContact.fulfilled, addContactSuccessReducer)
        .addCase(deleteContact.fulfilled, deleteContactsSuccessReducer)
        .addMatcher(getActions("pending"), pendingReducer)
        .addMatcher(getActions("rejected"), rejectedReducer)
        .addMatcher(getActions("fulfilled"), fulfilledReducer)
});

export const contactsReducer = contactsSlice.reducer;

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
