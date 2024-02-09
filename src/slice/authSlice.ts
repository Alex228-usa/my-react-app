// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  currentUser: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
