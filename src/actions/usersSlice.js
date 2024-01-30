// usersSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { _getUsers } from '../_DATA';

const usersSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {
        setUsers: (state, action) => {
            return action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;

// Thunk for fetching users asynchronously
export const fetchUsers = () => async (dispatch) => {
    try {
        console.log('Fetching users')
        const userData = await _getUsers();
        dispatch(setUsers(userData)); // Dispatch the action to update the state
        console.log(userData)
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

export default usersSlice.reducer;
