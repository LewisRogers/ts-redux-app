import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export type Contact = {
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    work: boolean,
}

export interface ContactState {
    value: Contact;
    status: 'idle' | 'editing' | 'failed';
}

export const initialState: ContactState = {
    value: {
        id: '',
        firstName: '',
        lastName: '',
        phone: '',
        work: false,
    },
    status: 'idle',
};

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        createContact: (state, action: PayloadAction<Contact>) => {
            state.value = action.payload;
        },
    }
});

export const { createContact } = contactSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectContact = (state: RootState) => state.counter.value;

export default contactSlice.reducer;
