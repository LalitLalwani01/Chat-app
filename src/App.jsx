import React from "react";
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react';
import ChannelContainer from "./components/channelContainer";
import {ChannelListContainer} from './components/index'

function App() {
 let apiKey = import.meta.env.VITE_API_KEY;
 console.log("apiKey", apiKey)

   const clients =StreamChat.getInstance(apiKey)
  return (
    
      <div>
       <Chat client={clients}></Chat>
       <ChannelContainer/>
       <ChannelListContainer/>
      </div>
    
  
  )
}

export default App;
