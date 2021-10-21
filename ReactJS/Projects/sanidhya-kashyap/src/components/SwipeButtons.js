import React from 'react'
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import { IconButton } from '@material-ui/core'
import "../css/SwipeButtons.css"

const SwipeButtons = () => {
    return (
        <div className="SwipeButtons">
            <IconButton className="SwipeButtons_replay"> <ReplayIcon fontSize="large" /></IconButton>
            <IconButton className="SwipeButtons_close"> <CloseIcon fontSize="large" /></IconButton>
            <IconButton className="SwipeButtons_star"> <StarRateIcon fontSize="large" /></IconButton> 
            <IconButton className="SwipeButtons_right"> <FavoriteIcon fontSize="large" /></IconButton>
            <IconButton className="SwipeButtons_light"> <FlashOnIcon fontSize="large" /> </IconButton>
           
        </div>
    )
}

export default SwipeButtons
