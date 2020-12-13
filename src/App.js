import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCards";
import Buttons from "./Buttons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path="/chats/:person">
            <Header backButton="/chats" />
           <ChatScreen/>
           
          </Route>

          <Route path="/chats">
            <Header backButton="/" />
            <Chats/>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />

            <Buttons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


