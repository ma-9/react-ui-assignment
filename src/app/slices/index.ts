import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState, AppThunk } from '../store';
import UserServices from "../services/UserServices";
import RoleServices from "../services/RoleServices";

export interface UserInterface {
    name?: string;
    email?: string;
    username?: string;
    mobile?: number;
    roleKey?: string;
    password?: string;
};

export interface RoleInterface {
    roleLabel?: string;
    roleKey?: string;
};

export interface ReactUIAssignmentStateInterface {
  users: UserInterface[];
  roles: RoleInterface[];
};

const initialState: ReactUIAssignmentStateInterface = {
  users: [
    { email: 'john@devforge.tech', mobile: 491023023, name: 'John Doe', password: 'adqwefa2wefs', roleKey: 'admin', username: 'john07' },
    { email: 'travis@devforge.tech', mobile: 491023023, name: 'travis Doe', password: 'adqwefa2wefs', roleKey: 'support', username: 'travis07' },
    { email: 'julien@devforge.tech', mobile: 491023023, name: 'julien Doe', password: 'adqwefa2wefs', roleKey: 'sales', username: 'julien07' },
    { email: 'Franklin@devforge.tech', mobile: 491023023, name: 'Franklin Doe', password: 'adqwefa2wefs', roleKey: 'sales', username: 'Franklin07' },
  ],
  roles: [
    { roleKey: 'admin', roleLabel: 'Admin' },
    { roleKey: 'support', roleLabel: 'Support' },
    { roleKey: 'sales', roleLabel: 'Sales' },
  ],
};

export const applicationSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<UserInterface>) => {
      state.users.push(action.payload);
    },
    editUser: (state, action: PayloadAction<UserInterface>) => {
      const userIndex = state.users.findIndex((user) => user.email === action.type);
      if (userIndex === -1) {
        return;
      }

      state.users[userIndex] = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      const userIndex = state.users.findIndex((user) => user.email === action.type);
      if (userIndex === -1) {
        return;
      }

      state.users.splice(userIndex, 1);
    },
  },
});

export const selectUsers = (state: AppState) => state.users;
export const selectRoles = (state: AppState) => state.roles;

export const { createUser, deleteUser, editUser } = applicationSlice.actions;

export default applicationSlice.reducer;
