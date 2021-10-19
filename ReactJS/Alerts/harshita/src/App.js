import React, { Component } from 'react';
import AlertPopUp from './AlertPopUp';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isWarning: false,
            isInfo: false,
            isSuccess: false,
            isError: false
        }
    }

    render() {
        return(
            <div className="aler-container">
                <div 
                    className="alert-grid" 
                    
                >
                    <div className="alert-button" style={{ backgroundColor: "rgba(253, 169, 14, 0.5)" }} onClick={() => this.setState({isWarning: true})}>Warning</div>
                    <div className="alert-button" style={{ backgroundColor: "rgba(14, 133, 253, 0.5" }} onClick={() => this.setState({isInfo: true})}>Information</div>
                    <div className="alert-button" style={{ backgroundColor: "rgba(19, 253, 169, 0.5)" }} onClick={() => this.setState({isSuccess: true})}>Success</div>
                    <div className="alert-button" style={{ backgroundColor: "rgba(253, 14, 14, 0.5)" }} onClick={() => this.setState({isError: true})}>Error</div>
                </div>

                {
                    this.state.isWarning ? 
                    <AlertPopUp 
                      alertType= {this.state.isWarning}
                      text={"Warning"}
                      onCloseHandle = {() => this.setState({isWarning: false})}
                   /> : null
                }
                
                {
                    this.state.isInfo ? 
                    <AlertPopUp 
                      alertType= {this.state.isInfo}
                      text={"Info"}
                      onCloseHandle = {() => this.setState({isInfo: false})}
                   /> : null
                }

                {
                    this.state.isSuccess ? 
                    <AlertPopUp 
                      alertType= {this.state.isSuccess}
                      text={"Success"}
                      onCloseHandle = {() => this.setState({isSuccess: false})}
                   /> : null
                }

                {
                    this.state.isError ? 
                    <AlertPopUp 
                      alertType= {this.state.isError}
                      text={"Error"}
                      onCloseHandle = {() => this.setState({isError: false})}
                   /> : null
                }
                 
            </div>
        )
    }
}

export default App

