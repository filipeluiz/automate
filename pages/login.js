'use strict'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Copyright from '../components/layout/Copyright'
import useStyles from '../components/helps/useStyles'
import { firebaseClient, authFirebase } from '../server/firebase'

const Login = () => {
  
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const classes = useStyles()

  useEffect(() => {
    firebaseClient()
  }, [])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paperLogin}>
          <Image 
            src='/logomarca.png' 
            alt='logomarca automate' 
            width={232}
            height={58}
          />
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <form className={classes.formLogin} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={pass}
            onChange={events => setPass(events.target.value)}            
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={async () => {
              await authFirebase.signInWithEmailAndPassword(email,pass)
              .then(function() {
                window.location.href = '/'
              })
              .catch(function (error) {
                console.log('Error de firebase: ' + error)
              })
            }}
          >
            entrar
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright name='Filipe Luiz' href='https://filipeluiz.com.br/' />
      </Box>
    </Container>
  );
}

export default Login
