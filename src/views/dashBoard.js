import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography, Grid, TextField, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../images/note.png';
import Todo from './Todo';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  img: {
      padding:'10px',
      paddingBottom:'0px',
      marginLeft:'60px'
  },
  typography: {
    marginLeft:'60px'
  },

 todo: {
   marginBottom:'300px'

 }
}));

export default function DashBoard() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
          <Grid container spacing={1} direction='row'>
              <Grid item xs={2} sm={2} md={2}  className={classes.root}>
                <img src={Logo} alt="logo" height='30px' className={classes.img}/>
                 <Typography className={classes.typography}><b style={{color:'#FF8C00'}}>Notes</b></Typography> 
              </Grid>
              <Grid item xs={10} sm={10} md={10}>
              </Grid>
          </Grid>
      </AppBar>
      <Todo className={classes.todo}/>
    </div>
  );
}
