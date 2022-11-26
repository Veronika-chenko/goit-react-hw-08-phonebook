export const reducer = {
    fetchContactsSuccessReducer: (state, action) => {
        state.items = action.payload;
    },
    addContactSuccessReducer: (state, action) => {
        state.items.push(action.payload);
    },
    deleteContactSuccessReducer: (state, action) => {
        const index = state.items.findIndex(
            contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
    },
    updateContactSuccessReducer: (state, action) => {
        const index = state.items.findIndex(
            contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
    },
    pendingReducer: state => {
        state.isLoading = true;
    },
    rejectedReducer: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
    fulfilledReducer: state => {
        state.isLoading = false;
        state.error = null;
    },
};
