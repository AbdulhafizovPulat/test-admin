import * as React from 'react';
import { AppBar, TitlePortal } from 'react-admin';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const MyAppBar = () => (
    <AppBar sx={{  background: "green"}}>
        <Toolbar sx={{ display: 'flex', justifyContent:"space-between", ml: 105, mr: 80, fontWeight: 500, fontSize: 25}}>
            Taqsim
        </Toolbar>
    </AppBar>
);

export default MyAppBar;