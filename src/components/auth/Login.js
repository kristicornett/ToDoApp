import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../managers/AuthManager';
import { useRef, useState } from 'react'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Scholar Squad
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme();

export const Login = ({ setToken }) => {
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [isUnsuccessful, setisUnsucessful] = useState(false)
    
const handleLogin = (event) => {
    event.preventDefault()

    const user = {
        username: username.current.value,
        password: password.current.value
    }

    loginUser(user)
    .then(response => {
        if ('valid' in response && response.valid) {
            setToken(response.token, JSON.stringify(response.user))
            navigate('/')
        }
        else {
            setisUnsucessful(true)
        }
    })
}

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={password}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        {
                    isUnsuccessful ? <p className='help'>Username or password is not valid</p> : ''
                }   
      </Container>
    </ThemeProvider>
  );
}