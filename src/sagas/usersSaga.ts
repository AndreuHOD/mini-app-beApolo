import { call, put, takeLatest } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getUsers, createUser } from '../components/api';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  type User,
} from '../features/usersSlice';

function* fetchUsersWorker() {
  try {
    const data: User[] = (yield call(getUsers)) as User[];
    yield put(fetchUsersSuccess(data));
  } catch (err: any) {
    yield put(fetchUsersFailure(err?.message ?? 'Failed to fetch users'));
  }
}

function* addUserWorker(action: PayloadAction<Omit<User, 'id'>>) {
  try {
    const created: User = (yield call(createUser, action.payload as Required<Omit<User, 'id'>>)) as User;
    yield put(addUserSuccess(created));
  } catch (err: any) {
    yield put(addUserFailure(err?.message ?? 'Failed to create user'));
  }
}

export default function* usersSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersWorker);
  yield takeLatest(addUserRequest.type, addUserWorker);
}
