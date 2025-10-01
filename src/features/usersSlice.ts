import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type User = {
  id?: number;
  name: string;
  email: string;
  status: string;
  hola?: string;
};

export interface UsersState {
  items: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UsersState = {
  items: [],
  status: 'idle',
  error: null,
};

// Actions to be handled by redux-saga
// fetch users
export const fetchUsersRequestType = 'users/fetchUsersRequest' as const;
export const fetchUsersSuccessType = 'users/fetchUsersSuccess' as const;
export const fetchUsersFailureType = 'users/fetchUsersFailure' as const;

// add user
export const addUserRequestType = 'users/addUserRequest' as const;
export const addUserSuccessType = 'users/addUserSuccess' as const;
export const addUserFailureType = 'users/addUserFailure' as const;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // saga-driven reducers
    fetchUsersRequest(state) {
      state.status = 'loading';
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },

    addUserRequest(state, _action: PayloadAction<Omit<User, 'id'>>) {
      state.status = 'loading';
      state.error = null;
    },
    addUserSuccess(state, action: PayloadAction<User>) {
      state.status = 'succeeded';
      state.items.push(action.payload);
    },
    addUserFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },

    setUsers(state, action: PayloadAction<User[]>) {
      state.items = action.payload;
    },
    clearUsers(state) {
      state.items = [];
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  setUsers,
  clearUsers,
} = usersSlice.actions;
export default usersSlice.reducer;
