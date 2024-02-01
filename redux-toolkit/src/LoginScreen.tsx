import React, { Fragment } from 'react';
import { BoxStyle, TypographyStyle } from './LoginScreenStyle';
import { Button, IconButton, InputAdornment, Link, OutlinedInput, TextField} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const LoginScreen: React.FC = () => {
    const navigate = useNavigate(); 

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <Fragment>
            <BoxStyle>
                <TypographyStyle variant="h2">Login Page</TypographyStyle>
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
                <Link href="#" underline="hover" onClick={()=>navigate('/Signup')}>
                    {'Forgot Password'}
                </Link>
                <Button variant="contained" color="success" onClick={()=>navigate('/home')}>
                   Login
                </Button>
            </BoxStyle>
        </Fragment>
    );
};

export default LoginScreen;
