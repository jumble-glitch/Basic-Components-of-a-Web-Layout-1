import React, {useEffect, useState, createContext, useRef } from "react";
import {io} from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();
const socket = io('http://localhost:5000');

const ContextProvider = ({children}) =>{

    const [stream, setStream] = useState(null);
    const [creator, setCreator] = useState('');
    const [call, setCall] = useState({});
    const [callRecived, setCallRecived] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState('')
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();
    

    useEffect (()=>{
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((currentStream)=>{
            setStream(currentStream);
            myVideo.current.srcObject = currentStream;
        });

        socket.on('creator', (id)=> setCreator(id));
        socket.on('calluser', ({from, name: callerName, signal})=>{
            setCall({isReceivedCall : true, from, name: callerName, signal})
        });
    }, []);

    const answerCall = ()=>{
        setCallRecived(true);
        const peer = new Peer({initiator: false, trickle: false, stream});

        peer.on('signal', (data)=>{
            socket.emit('answercall', {signal: data, to: call.from});
        });

        peer.on('stream', (currentStream)=>{
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer;
    }

    const callUser = (id)=>{
        const peer = new Peer({initiator: true, trickle: false, stream});
        peer.on('signal', (data)=>{
            socket.emit('calluser', {userToCall: id, signalData: data, from: creator, name});
        });

        peer.on('stream', (currentStream)=>{
            userVideo.current.srcObject = currentStream;
        });

        socket.on('callaccepted', (signal)=>{
            setCallRecived(true);
            peer.signal(signal)

        });
        connectionRef.current = peer;
    }

    const leaveCall = ()=>{
        setCallEnded(true);
        connectionRef.current.destroy();
        window.location.reload();
    }

    return(
        <SocketContext.Provider value={{
            call,
            callRecived,
            myVideo,
            userVideo,
            name,
            setName,
            callEnded,
            stream,
            creator,
            callUser,
            leaveCall,
            answerCall
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export {ContextProvider, SocketContext}
