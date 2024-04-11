import React, { useState } from 'react'
import { MessageList , MessageInput, Thread, Window, Avatar,useChannelStateContext,
  useChatContext,  useChannelActionContext } from 'stream-chat-react';

import {IoMdInformationCircleOutline } from 'react-icons/io';
export  const GiphyContext =React.createContext({});

const ChannelInner = () => {

  const [giphyState, setGiphyState] =useState(false);
  const {sendMessage} =useChannelActionContext();

  const overrideSubmitHandler =(message)=>{
    let updateMessage ={
      attachements : message.attachements,
      mentioned_users :message.mentioned_users,
      parent_id :message.parent_id,
      parent: message.parent,
      text :message.text
    }
  
   if(giphyState){
    updateMessage ={...updateMessage, text: `/giphy ${message.text}`}
   }
    if(sendMessage){
     sendMessage(updateMessage);
     setGiphyState(false);
    }
  }
  return (
    <GiphyContext.provider value ={{giphyState,setGiphyState}}>
      <div>
        <Window>
          <TeamChannelHeader setIsEditing ={setIsEditing}/>
          <MessageList/>
          <MessageInput overrideSubmitHandler={overrideSubmitHandler}/>
        </Window>
      </div>
    </GiphyContext.provider>
  )
}

const TeamChannelHeader =({setIsEditing})=>{
  const {Channel, watcher_count}  =useChannelStateContext();
  const {client} =useChatContext();

 const MessagingHeader =()=>{
  const memebers = Object.values(Channel.stste.members).filter(({ user })=> user.id !==client.userID);
  const additionalMembers =members.length -3
 
 if(channel.type === 'messaging'){
  return( 
    <div>
      {memebers.map(({user}, i)=>(
        <div key={i}>
          <Avatar image={user.image} name ={user.fullName || user.id} size={32}></Avatar>
          <p>
            {user.fillName || user.id}
          </p>
          </div>
          ))}
          {additionalMembers>0 &&<p> and {additionalMembers} more</p> }
          </div>
  )
 } 
 return(
  <div>
    <p>
      # {channel.data.name}
    </p>
    <span onClick={()=> setIsEditing(true)}>
      <IoMdInformationCircleOutline/>
    </span>
  </div>
 )
}
 const getWatcherText =(watchers)=>{
  if(!watchers) return 'No user onnline';
  if(watchers === 1)return '1 User online';
  return `${watchers} users online`;
 }
return(
  <div>
    <MessagingHeader/>
    <div>
      <p>{getWatcherText(watcher_count)}</p>
    </div>
  </div>
 )
}
export default ChannelInner;
