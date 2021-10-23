import React from 'react'
import {Typography, AppBar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import LiveVideo from './components/LiveVideo'
import Notification from './components/Notification'
import Options from './components/Options'

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        boxShadow: '0px 0px 15px 0px #000',
        
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
}));

function App() {
    const classes = useStyles();
    return (
        <div className= {classes.wrapper}>
            <AppBar className= {classes.appBar} position='static'  color="inherit">
                <Typography variant = 'h4' align = "center">
                    Video Call
                </Typography>
            </AppBar>
            <LiveVideo/>
            <Options>
                <Notification/>
            </Options>

        </div>
    )
}

export default App
