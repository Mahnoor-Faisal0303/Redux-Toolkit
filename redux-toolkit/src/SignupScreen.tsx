import React, { Fragment } from 'react';
import { BoxStyle, TypographyStyle } from './LoginScreenStyle';
import { Button, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';


const SignupScreen: React.FC = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Fragment>
            <BoxStyle>
                <TypographyStyle variant="h2">
                    Signup Page</TypographyStyle>
                <TextField
                    required
                    id="outlined-required"
                    label="Enter Name"
                    type="text"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Enter your Email Id"
                    type="email"
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
                    defaultValue="Enter Password"
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
                    defaultValue="Confirm Password"
                />

                <Button variant="contained" color="success" onClick={() => navigate('/')}>
                    SignUp
                </Button>
            </BoxStyle>
        </Fragment>
    )
}
export default SignupScreen;