import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import "./MyChat.css";

function MyChat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chats/${name}`} >
   <div className="chat">
      <Avatar className="chat__image" alt={name} src={profilePic} />
      <div className='chat__details'>
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className='chat__time'>{timestamp}</p>
    </div>

    </Link>
 
  );
}

export default MyChat;
