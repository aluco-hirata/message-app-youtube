import React, { useEffect, useState } from "react";
import "./Sidebar.css";

import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "./SidebarChat";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from '../firebase';




const Sidebar = () => {
  const user = useSelector(selectUser)
  const [chats, setChats] = useState([])

  useEffect(() => {
    db.collection("chats").onSnapshot(snapshot => 
      setChats(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    )
  }, [])

  const addChat = () => {
    const chatName = prompt("Please enter a chat name")
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      })
    }
  }

	return (
    <div className="sidebar">
      
      <div className="sidebar__header">
        <IconButton onClick={() => auth.signOut()}>
          <Avatar src={user.photo} className="sidebar__avatar" />
        </IconButton>
				<div className="sidebar__input">
					<SearchIcon />
					<input type="text" placeholder="search" />
				</div>
        <IconButton
          variant="outlined"
          className="sidebar__inputButton"
          onClick={addChat}
        >
          <RateReviewOutlinedIcon />
        </IconButton>
			</div>

      <div className="sidebar__chats">
        {chats.map(chat => (
          <SidebarChat
            key={chat.id}
            id={chat.id}
            chatName={chat.data.chatName}
          />
        ))}
      </div>

		</div>
	);
};

export default Sidebar;
