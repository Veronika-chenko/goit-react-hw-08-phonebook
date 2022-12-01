import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./operations";
import { reducer } from "./reducers";

const { fetchContactsSuccessReducer,
    addContactSuccessReducer,
    deleteContactSuccessReducer,
    updateContactSuccessReducer,
    pendingReducer,
    rejectedReducer,
    fulfilledReducer } = reducer;

const extraActions = [fetchContacts, addContact, deleteContact, updateContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => builder
        .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
        .addCase(addContact.fulfilled, addContactSuccessReducer)
        .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
        .addCase(updateContact.fulfilled, updateContactSuccessReducer)
        .addMatcher(getActions("pending"), pendingReducer)
        .addMatcher(getActions("rejected"), rejectedReducer)
        .addMatcher(getActions("fulfilled"), fulfilledReducer)
});

export const contactsReducer = contactsSlice.reducer;
