import React, { useEffect, useState } from 'react'
import axios  from 'axios';

const Chatpage = () => {

const [chats,setChats] = useState([]);

 const fetchchats = async() =>{
    const  data  = await axios.get('/api/chat');
    setChats(data);
    console.log(data);
 }

 useEffect(() => {
    fetchchats();
 }, [])

  return (
   
   <div>
  {Array.isArray(chats) ? (
    chats.map((chat) => (
      <div key={chat.chatId}>{chat.chatName}</div>
    ))
  ) : (
    <div>No chats available</div>
  )}
</div>

   // <div>
   // {chats.map((chat) => (
   //   <div key={chat.chatId}>{chat.chatName}</div>
   // ))}
   // </div>
  )
}

export default Chatpage