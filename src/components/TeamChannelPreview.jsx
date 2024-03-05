import React from 'react'
import { Avatar,useChatContext } from 'stream-chat-react'


const TeamChannelPreview = ({channel, type}) => {

  const ChannelPreview =()=>{
    return(
      <P>
        {channel?.data?.name} ||{channel?.data?.id}
      </P>
    )
  }

  const DirectPreview =()=>{
    const members =Object.values(channel.state.members).filter(({user})=> user.id !==client.userID)
    return(
      <div>
        <Avatar
        image={members[0]?.user.image}
        name ={members[0]?.user?.fullName}
        size={24}>
          
        </Avatar>
        <p>{members[0]?.user?.fullName || members [0]?.user.id}</p>
      </div>
    )
  }
  const {channel:activeChannel, client}= useChatContext();
  return (
    <div className={channel?.id === activeChannel?.id?"" :""} onClick={()=>{
      console.log(channel);
    }}>
    {type ==="team"? <ChannelPreview/>:<DirectPreview/>}
    </div>
  )
}

export default TeamChannelPreview;
