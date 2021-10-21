import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Typography, Container, Paper, Grid, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    boxShadow: '0px 0px 15px 0px #000',
  },
}));

function Options({ children }) {
  const { creator, callRecived, name, setName, leaveCall, callUser, callEnded } = useContext(SocketContext);
  const classes = useStyles();
  const [idToCall, setidToCall] = useState('');
  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>

        <form className={classes.root} autoComplete='off' noValidate>
          <Grid container className={classes.gridContainer} >
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField label='name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={creator} className={classes.margin}>
                <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize='large' />}>
                  Copy ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Make a Call
              </Typography>
              <TextField label='ID to call' value={idToCall} onChange={(e) => setidToCall(e.target.value)} fullWidth />

              {callRecived && !callEnded ? (
                <Button
                  variant="contained"
                  color='secondary'
                  startIcon={<PhoneDisabled fontSize='large' />}
                  fullWidth
                  onClick={leaveCall}
                  className={classes.margin}
                >
                  Disconnect
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color='primary'
                  startIcon={<Phone fontSize='large' />}
                  fullWidth
                  onClick={() => callUser(idToCall)}
                  className={classes.margin}
                >
                  Call
                </Button>
              )}

            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  )
}

export default Options
