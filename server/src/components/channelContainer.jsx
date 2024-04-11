import React from 'react'
import {Channel, MessageSimple, useChatContext} from 'stream-chat-react';
import {ChannelInner, CreateChannel, EditChannel, TeamMessage} from './index'


const ChannelContainer = ({ isCreating,setIsCreating, isEditing,setIsEditing,createType}) => {
  const {channel} =useChatContext();
   if(isCreating){
    return(
      <div>
      <CreateChannel createType={createType} setIsCreating ={setIsCreating}/>
    </div>
    )
 

   } 
   if(isEditing){
    return(
      <div>
        <EditChannel setIsEditing={setIsCreating}/>
      </div>
    )
   }
   const EmptyState =() =>{
    <div>
      <p>
        This is the begining of your chat history
      </p>
      <p>
        Send Message, attachemenets, links, emojis, and more!  
      </p>
    </div>
   }

  return (
    <div>
      <Channel
      EmptyStateIndicator ={EmptyState}
      Message={(messageProps, i )=><MessageSimple key={i}{...messageProps}/>}
      />
      <p>ChannelList</p>
    </div>
  )
}

export default ChannelContainer;
