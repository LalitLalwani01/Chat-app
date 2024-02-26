import {ChannelSearch,Sidebar, TeamChannelList,TeamChannelPreview} from './'
import { ChannelList,useChatContext } from 'stream-chat-react';



    const ComponyHeader =()=>{
      return(
        <div className="m-2">
        <p>Chat Application</p> 
        </div>
      )
     
    }
  // return (
  //   <>
  //   channelListContainer
  //   </>  
     
 
  // )

  const ChannelListContainer = () => {
     return (
      <div className='h-screen bg-gray-800 flex'>
        <div className="w-20">
        <Sidebar/>
        </div>
        <div className="text-white">    
          <ComponyHeader/>
          <ChannelSearch/>
          <ChannelList
          filters={{}}
          channelRenderFilterFn={()=>{}}
          List={(listProps)=>{
            return(
              <TeamChannelList {...listProps}
              type="team"/>
            )
          }}
          Preview={(previewProps)=>{
            return(
              <TeamChannelPreview {...previewProps}
              type="team"/>
            )
          }}/>
              <ChannelList
          filters={{}}
          channelRenderFilterFn={()=>{}}
          List={(listProps)=>{
            return(
              <TeamChannelList {...listProps}
              type="messaging"/>
            )
          }}
          Preview={(previewProps)=>{
            return(
              <TeamChannelPreview {...previewProps}
              type=""/>
            )
          }}/>
        </div>
      </div>
     )
}

export default ChannelListContainer;
