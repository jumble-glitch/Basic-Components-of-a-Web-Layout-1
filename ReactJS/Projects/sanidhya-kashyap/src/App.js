import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import Chatscreen from './components/Chatscreen' 
import "./App.css";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>

          <Route path="/chats/:person">
          <Header backButton="/chats"/>
            <Chatscreen/>
          </Route>


          <Route path="/chats">
          <Header backButton="/"/>
          <Chats/>
          </Route>

          <Route path="/">
          <Header/>  
          <TinderCards/>
          <SwipeButtons />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;

