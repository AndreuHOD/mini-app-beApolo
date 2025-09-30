import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getUsers, createUser } from '../components/api';

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

export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchAll',
  async () => {
    const data = await getUsers();
    return data as User[];
  }
);

export const addUser = createAsyncThunk<User, Omit<User, 'id'>>(
  'users/create',
  async (user) => {
    const created = await createUser(user as Required<Omit<User, 'id'>>);
    return created as User;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.items = action.payload;
    },
    clearUsers(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch users';
      })
      .addCase(addUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Push or re-fetch; here we optimistically add
        state.items.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to create user';
      });
  },
});

export const { setUsers, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;
