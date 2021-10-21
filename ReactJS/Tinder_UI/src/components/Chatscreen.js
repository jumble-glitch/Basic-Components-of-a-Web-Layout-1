import React from 'react';
import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import '../css/Chatscreen.css';

function Chatscreen() {
    const [input, setInput] = useState()
    const [messages, setMessages] = useState([
        {
            name: 'Chris',
            img: 'https://media.gettyimages.com/photos/actor-chris-evans-arrives-for-the-premiere-of-marvels-captain-america-picture-id478498743?k=20&m=478498743&s=612x612&w=0&h=_8vUgTLywnWCP-SEW8xgsN2jm9qUFCmGdekeStQoxAY=',
            message: 'Yo whats up'
        },
        {
            name: 'Chris',
            img: 'https://media.gettyimages.com/photos/actor-chris-evans-arrives-for-the-premiere-of-marvels-captain-america-picture-id478498743?k=20&m=478498743&s=612x612&w=0&h=_8vUgTLywnWCP-SEW8xgsN2jm9qUFCmGdekeStQoxAY=',
            message: 'How are you'
        },
        {
            message: 'I am good'
        },
    ]);
    const handleSend = e =>{
        e.preventDefault();
        setMessages([...messages, { message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chat_stamp">YOU MATCHED WITH CHIRS ON 26/09/21</p>

            {messages.map((message) => ( 
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar
                        className="chat_img" 
                        alt={message.name} 
                        src={message.img} />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>  
                ) : (
                    <div className="chatScreen_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
                
            ))}
                <form className="chatScreen_form">
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen_input" type="text" placeholder="Type a message"/>
                    <button onClick={handleSend} type="submit" className="button">SEND</button>
                </form>
        </div>
    )
}

export default Chatscreen
