import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  isLoggedIn: boolean;
  username: string;
}

const initialState: LoginState = {
  isLoggedIn: false,
  username: ''
};

const loginSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = '';
    }
  }
});

export const { login, logout } = loginSlices.actions;
export default loginSlices.reducer;
