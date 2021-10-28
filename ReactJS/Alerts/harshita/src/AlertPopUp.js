import React from 'react'

function AlertPopUp({ onCloseHandle, alertType , text }) {
    return (
        <div 
            className="alert-popUp"
            style={ alertType === "Warning" ? {backgroundColor: "rgba(253, 169, 14, 0.5)" } : alertType === "Info" ? { backgroundColor: "rgba(14, 133, 253, 0.5"} : alertType === "Success" ? {backgroundColor: "rgba(19, 253, 169, 0.5)"}  : alertType === "Error" ? {backgroundColor: "rgba(253, 14, 14, 0.5)"} : null } 
        >
            <h4>{text}</h4>
            <button onClick ={() => onCloseHandle()} >OK</button>
        </div>
    )
}

export default AlertPopUp
