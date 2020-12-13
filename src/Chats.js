import React from "react";
import "./Chats.css";
import MyChat from "./MyChat";


function Chats() {
  return (
    <div className="chats">
      <MyChat
        name="Natasha"
        message="Hey! How are You?"
        timestamp="5 minutes ago"
        profilePic="https://1.bp.blogspot.com/-LymFN322q4A/XmaGRRuQh0I/AAAAAAAABVI/Gq9HKJ6DpnMdKfxSWvrD1BcR1OM3fowxwCNcBGAsYHQ/s1600/36606909_18511890685_lnpNm.jpg"
      />
      <MyChat
        name="Priyanka"
        message="Coming for party tonight?🎉" 
        timestamp="15 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zayn_Wiki_%28cropped%29.jpg/220px-Zayn_Wiki_%28cropped%29.jpg"
      />
      <MyChat
        name="Jenna"
        message="Hi Missing You 💘" 
        timestamp="3 days ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVHsF_NaZa7dpdj4sudwWjMjtZ-8LcXGUuw&usqp=CAU"
      /> 
      <MyChat
        name="Tj"
        message="Yo! where are you? 👦 " 
        timestamp="1 month ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4n98cK4-S6IHaM3x_ogDrjz0AQ0nQQiEWw&usqp=CAU"
      />
    </div>
  );
}

export default Chats;
