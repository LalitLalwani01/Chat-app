import React from 'react'
import { Avatar,useChatContext } from 'stream-chat-react'


const TeamChannelPreview = ({channel, type}) => {
  const {channel:activeChannel, client}= useChatContext();
  return (
 <p>#{channel?.data?.name} ||{channel?.data?.id}</p>
  )
}

export default TeamChannelPreview;
