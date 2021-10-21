import React from 'react'
import "../css/Header.css"
import { Link, useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';

function Header({backButton})  {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton) }> 
                    <ArrowBackIosIcon fontSize="large" className="header_icon" /> </IconButton>
            ) : (
            <IconButton><PersonIcon fontSize="large" className="header_icon" /></IconButton>
           
            )}
           <Link to="/">
            <img className="header_img" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="tinder logo" />
            </Link>
           <Link to="/chats"> 
           <IconButton><QuestionAnswerIcon fontSize="large" className="header_icon"/>
           </IconButton> 
           </Link>
        </div>
    )
}

export default Header