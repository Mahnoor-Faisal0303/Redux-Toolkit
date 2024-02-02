import React, { Fragment, useEffect, useState } from 'react';
import { InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { AlertStyle, BoxStyle, ButtonStyle, IconButtonStyle, OutlinedInputStyle, TextFieldStyle, TypographyStyle } from './LoginScreenStyle';
import { fakeLoginData } from './Data' 

const SignupScreen: React.FC = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
    const isLoggedIn = useSelector((state: RootState) => state.logins.isLoggedIn);
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/home');
        }
    })

    const [name,setName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const onClickLogin = function onClickLoginFunc(){
        if(password === confirmPassword && name && email){
            const newUser = {email, password};
            fakeLoginData.push(newUser);
            navigate('/')
        }
        else{
            setShowAlert(true);
        }
    }

    return (
        <Fragment>
            <BoxStyle>
                <TypographyStyle variant="h2">
                    Signup Page </TypographyStyle>
                <TextFieldStyle
                    required
                    id="outlined-required"
                    type="text"
                    placeholder='Enter your Name'
                    onChange={(e) => setName(e.target.value)}
                />
                <TextFieldStyle
                    required
                    id="outlined-required"
                    type="email"
                    placeholder='Enter your Email Id'
                   onChange={(e) => setEmail(e.target.value)}
                    //value={setEmail}
                />
                <OutlinedInputStyle
                    required
                    id="outlined-required"
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
                    placeholder='Enter Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <OutlinedInputStyle
                    required
                    id="outlined-required"
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <ButtonStyle variant="contained" color="success" onClick={onClickLogin}>
                    SignUp
                </ButtonStyle>

                {showAlert && (
                    <AlertStyle variant="filled" severity="info">
                        Invalid Email or Password!
                    </AlertStyle>
                )}
            </BoxStyle>
        </Fragment>
    )
}
export default SignupScreen;