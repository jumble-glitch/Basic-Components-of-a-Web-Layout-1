import React, { Component } from 'react';
import AlertPopUp from './AlertPopUp';
import "./App.css"

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

    warningHandle = () => {
        this.setState({isWarning: true})

        setTimeout(() => {
           this.setState({isWarning: false})
        }, 3000)
    }

    infoHandle = () => {
        this.setState({isInfo: true})

        setTimeout(() => {
           this.setState({isInfo: false})
        }, 3000)
    }

    successHandle = () => {
        this.setState({isSuccess: true})

        setTimeout(() => {
           this.setState({isSuccess: false})
        }, 3000)
    }

    errorHandle = () => {
        this.setState({isError: true})

        setTimeout(() => {
           this.setState({isError: false})
        }, 3000)
    }

    render() {
        return(
            <div className="aler-container">
                <div 
                    className="alert-grid" 
                    
                >
                    <div className="alert-button" style={{ backgroundColor: "rgba(253, 169, 14, 0.5)" }} onClick={this.warningHandle}>Warning</div>
                    <div className="alert-button" style={{ backgroundColor: "rgba(14, 133, 253, 0.5" }} onClick={this.infoHandle}>Information</div>
                    <div className="alert-button" style={{ backgroundColor: "rgba(19, 253, 169, 0.5)" }} onClick={this.successHandle}>Success</div>
                    <div className="alert-button" style={{ backgroundColor: "rgba(253, 14, 14, 0.5)" }} onClick={this.errorHandle}>Error</div>
                </div>

                {
                    this.state.isWarning ? 
                    <AlertPopUp 
                      alertType={"Warning"}
                      text={"some Warning messages! "}
                      onCloseHandle = {() => this.setState({isWarning: false})}
                   /> : null
                }
                
                {
                    this.state.isInfo ? 
                    <AlertPopUp 
                      alertType={"Info"}
                      text={"some Informational messages! "}
                      onCloseHandle = {() => this.setState({isInfo: false})}
                   /> : null
                }

                {
                    this.state.isSuccess ? 
                    <AlertPopUp 
                      alertType={"Success"}
                      text={"The Success messages! "}
                      onCloseHandle = {() => this.setState({isSuccess: false})}
                   /> : null
                }

                {
                    this.state.isError ? 
                    <AlertPopUp 
                      alertType={"Error"}
                      text={"some Error messages! "}
                      onCloseHandle = {() => this.setState({isError: false})}
                   /> : null
                }
                 
            </div>
        )
    }
}

export default App

