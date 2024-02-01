import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface loginState {
    loginInfo: {
        email: string,
        password: string,
    };
    isLoggedIn: boolean;
}

const loginSlice = createSlice({
    name: 'logins',
    initialState:  {
        loginInfo: {
            email: '',
            password: ''
        },
        isLoggedIn: false,
    },
    reducers: {
        setCurrentUser: (state: loginState, action: PayloadAction<{ email: string; password: string }>) => {
             state.loginInfo = action.payload;
             state.isLoggedIn = true;
             console.log(state);  
        },
    },
});

export const { setCurrentUser } = loginSlice.actions;
export default loginSlice.reducer;
