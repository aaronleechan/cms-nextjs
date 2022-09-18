import React from 'react';
import { signOut } from 'next-auth/react';
import { Button } from '@material-ui/core';

const LogOut = () => <Button variant='contained' color='secondary' onClick={()=>signOut()}>Log Out</Button>

export default LogOut;
