import React, { Fragment, useEffect, useState } from 'react';
import { BoxStyle, TypographyStyle } from './LoginScreenStyle';
import { Button, IconButton, InputAdornment, Link, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { fakeLoginData } from './Data'
import { setCurrentUser } from './Store/Slices/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';

const LoginScreen: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginFunction = () => {
        const user = fakeLoginData.find(userData => userData.email === email);
        if (user && user.password === password) {
            dispatch(setCurrentUser(user));
           
        } else {
            alert("Invalid email or password");
        }
    }
    const isLoggedIn = useSelector((state: RootState) => state.logins.isLoggedIn);
    useEffect(()=>{
        if(isLoggedIn){
            navigate('/home');
        }
    })

    return (
        <Fragment>
            <BoxStyle>
                <TypographyStyle variant="h2">Login Page</TypographyStyle>
                <TextField
                    required
                    id="outlined-required"
                    type="email"
                    value={email}
                    placeholder='Enter your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <OutlinedInput
                    required
                    id="outlined-required"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    // defaultValue="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link href="#" underline="hover" onClick={() => navigate('/Signup')}>
                    {'Forgot Password'}
                </Link>
                <Button variant="contained" color="success" onClick={loginFunction} >
                    Login
                </Button>
            </BoxStyle>
        </Fragment>
    );
};

export default LoginScreen;
