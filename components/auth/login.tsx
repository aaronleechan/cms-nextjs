import React from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@material-ui/core';

const LogIn = () => <Button variant='contained' color='primary' onClick={()=>signIn()}>Sign In</Button>

export default LogIn;