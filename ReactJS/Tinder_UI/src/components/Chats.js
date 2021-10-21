import React from 'react';
import '../css/Chats.css';
import Chat from '../components/Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Chis"
                message="Yo whats up"
                timestamp="43 sec ago"
                profilePic="https://media.gettyimages.com/photos/actor-chris-evans-arrives-for-the-premiere-of-marvels-captain-america-picture-id478498743?k=20&m=478498743&s=612x612&w=0&h=_8vUgTLywnWCP-SEW8xgsN2jm9qUFCmGdekeStQoxAY="
            />

            <Chat
                name="Selena"
                message="What's going on"
                timestamp="43 min ago"
                profilePic="https://media.gettyimages.com/photos/selena-gomez-attends-the-premiere-of-disneys-frozen-2-at-dolby-on-picture-id1186220122?k=20&m=1186220122&s=612x612&w=0&h=he6E7D8gH3K_Wb0PPLuv_AsNa-PQowlUm_t-0XqDm54="
            />
        </div>
    )
}

export default Chats
