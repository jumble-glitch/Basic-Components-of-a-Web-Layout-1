import React from 'react'

function AlertPopUp({ alertType, onCloseHandle, text }) {
    return (
        <div className="alert-popUp">
            <h1>{text}</h1>
            <button onClick={() => onCloseHandle()}>Close</button> 
        </div>
    )
}

export default AlertPopUp
