import React, { Fragment, useEffect, useState } from 'react';
import { AlertStyle, BoxStyle, ButtonStyle, IconButtonStyle, LinkStyle, OutlinedInputStyle, TextFieldStyle, TypographyStyle } from './LoginScreenStyle';
import { InputAdornment, Snackbar } from '@mui/material';
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
    const [showAlert, setShowAlert] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const loginFunction = () => {
        const user = fakeLoginData.find(userData => userData.email === email);
        if (user && user.password === password) {
            dispatch(setCurrentUser(user));

        } else {
            setShowAlert(true);
            setTimeout(function () {
                setShowAlert(false);
            }, 2000);
        }
    }

    const isLoggedIn = useSelector((state: RootState) => state.logins.isLoggedIn);
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/home');
        }
    })

    return (
        <Fragment>
            <BoxStyle>
                <TypographyStyle variant="h3">Login /
                    <LinkStyle href="#" underline="hover" onClick={() => navigate('/Signup')}>
                        {' SignUP'}
                    </LinkStyle>
                </TypographyStyle>

                <TextFieldStyle
                    required
                    id="outlined-required"
                    type="email"
                    value={email}
                    placeholder='Enter your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <OutlinedInputStyle
                    required
                    id="outlined-required"
                    placeholder='Enter Password'
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButtonStyle
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButtonStyle>
                        </InputAdornment>
                    }
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <ButtonStyle variant="contained" color="success" onClick={loginFunction} >
                    Login
                </ButtonStyle>

                {showAlert && (
                    <AlertStyle variant="filled" severity="info">
                        Invalid Email or Password!
                    </AlertStyle>
                )}
                {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
                <Snackbar
                    //open={open}
                    autoHideDuration={6000}
                    // onClose={handleClose}
                    message="Note archived"
                // action={action}
                />
            </BoxStyle>
        </Fragment>
    );
};

export default LoginScreen;
