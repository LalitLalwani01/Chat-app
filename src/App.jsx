import React, { useState } from "react";
import {StreamChat} from 'stream-chat'
import {Avatar, Chat} from 'stream-chat-react';
import {ChannelListContainer,ChannelContainer,Auth} from './components/index'
import  Cookies  from "universal-cookie";
const cookies =new Cookies;
const authToken = cookies.get('token');
import "stream-chat-react/dist/css/index.css"
import "./App.css"
let apiKey = import.meta.env.VITE_API_KEY;

const clients =StreamChat.getInstance(apiKey)

function App() {
  const [createType, setCreateType]= useState('');
  const [isCreating, setIsCreating] =useState(false);
  const [isEditing, setIsEditing] =useState(false);
 
  if(authToken){
    clients.connectUser({
      id:cookies.get('userId'),
      name:cookies.get('userName'),
      fullName:cookies.get('fullName'),
      image:cookies.get('avatarUrl'),
      hashedPassword:cookies.get('hashedPassword'),
      phoneNumber:cookies.get('phoneNumber')
    },authToken)
  }
 console.log("apiKey", apiKey)
 
   console.log(clients)

   if(!authToken) return <Auth/>

  return (
    
      <div>
       <Chat client={clients}>
       <ChannelContainer 
       isCreating= {isCreating}
       setIsCreating ={setIsCreating}
       setCreateType ={setCreateType}
       setIsEditing ={setIsEditing}
       />
       <ChannelListContainer
       isCreating= {isCreating}
       setIsCreating ={setIsCreating}
       isEditing={isEditing}
       setIsEditing ={setIsEditing}
       createType ={createType}

       />
       
       </Chat>
      </div>
    
  
  )
}

export default App;
