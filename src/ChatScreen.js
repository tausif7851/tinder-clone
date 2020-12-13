import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Natasha",
      image:
        "https://1.bp.blogspot.com/-LymFN322q4A/XmaGRRuQh0I/AAAAAAAABVI/Gq9HKJ6DpnMdKfxSWvrD1BcR1OM3fowxwCNcBGAsYHQ/s1600/36606909_18511890685_lnpNm.jpg",
      message: "Hey nice meeting you.",
    },
    {
      name: "Natasha",
      image:
        "https://1.bp.blogspot.com/-LymFN322q4A/XmaGRRuQh0I/AAAAAAAABVI/Gq9HKJ6DpnMdKfxSWvrD1BcR1OM3fowxwCNcBGAsYHQ/s1600/36606909_18511890685_lnpNm.jpg",
      message: "How are you!?.",
    },
    {
      message: "Hey! How are You?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chat__timestamp">YOU MATCHED WITH NATASHA ON 1/10/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chat__message">
            <Avatar
              className="chat__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chat__text">{message.message}</p>
          </div>
        ) : (
          <div className="chat__message">
            <p className="chat__textuser">{message.message}</p>
          </div>
        )
      )}

      <form className="send__Text">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chat__input"
          type="text"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} type="submit" className="chat__button">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
