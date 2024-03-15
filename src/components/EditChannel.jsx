import React, { useState } from 'react'
import { useChatContext } from 'stream-chat-react';
import { UserList }   from './index';
import { CloseCreateChannel } from '../assets/CloseCreateChannel';

const ChannelNameInput = (channelName ='' , setChannelName) => {
  const handleChange =()=>{
    e.preventDefault();

    setChannelName(e.targer.value)

  }
  return (
    <div className='channel-name-input__wrapper'>
      <p>Name</p>
      <input value={channelName} onChange={handleChange} placeholder='Channel-Name'></input>
      <p>Add Members</p>     
    </div>
  )
}
const EditChannel =({ setIsEditing })=>{
  const { channel } =useChatContext();
  const [channelName, setChannelName] =useState(channel?.data?.name);
  const [selectedUser, setSelectedUser] = useState([]);

  const updateChannel = async ()=>{
    const nameChanged = channelName !== (channel.data.name || channel.data.id)
     if(nameChanged){
      await channel.update({name : channelName} , { text : `Channel name changed to ${channelName}`})
     }
     if(selectedUser.length){
      await channel.addMembers(selectedUser);
     }
     selectedUser(null);
     setIsEditing(false);
     setSelectedUser([]);
     }
  
  return(
    <div className='edit-channel__container'>
      <div className='edit-channel__header'>
        <p>EditChannel</p>
        <CloseCreateChannel setIsEditing={setIsEditing}/>
      </div>
      <ChannelNameInput channelName={channelName} setChannelName ={setChannelName}/>
      <UserList selectedUser ={setSelectedUser} />
      <div className='edit-channel__button-wrapper' onClick={updateChannel}>
        <p>Save Changes</p>
      </div>
    </div>
  )
}

export default EditChannel;
