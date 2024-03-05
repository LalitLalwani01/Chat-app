import { useState } from 'react';
import {ChannelSearch,Sidebar, TeamChannelList,TeamChannelPreview} from './';
import { ChannelList } from 'stream-chat-react';
import {AiOutlineBars} from 'react-icons/ai'


    const ComponyHeader =()=>{
      return(
        <div className="channel-list__header">
          <p className='channel-list__header__text'>Medical Pager</p>
        <p>Chat Application</p> 
        </div>
      )
    }
    const customChannelTeamFilter = (channels)=>{
      return channels.filter((channel)=>channel.type==='team')
    }
    const customChannelMessageFilter =(channels)=>{
      return channels.filter((channel) =>channel.type === '')
    }
  // return (
  //   <>
  //   channelListContainer
  //   </>  
     
 
  // )

  const ChannelListContent = ({isCreating, setCreateType, setIsCreating, setIsEditing}) => {
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
          channelRenderFilterFn={(channel)=>{customChannelTeamFilter(channel)}}
          List={(listProps)=>{
            return(
              <TeamChannelList {...listProps}
              type="team"
              isCreating ={isCreating}
              setIsEditing ={setIsEditing}
              setIsCreating ={setIsCreating}
              setCreateType={setCreateType}
              />
            )
          }}
          Preview={(previewProps)=>{
            return(
              <TeamChannelPreview {...previewProps}
              type="team"
              />
            )
          }}/>
              <ChannelList
          filters={{}}
          channelRenderFilterFn={(channel)=>{customChannelMessageFilter(channel)}}
          List={(listProps)=>{
            return(
              <TeamChannelList {...listProps}
              type="messaging"
              isCreating ={isCreating}
              setIsEditing ={setIsCreating}
              setIsCreating ={setIsCreating}
              setCreateType={setCreateType}
              />
            )
          }}
          Preview={(previewProps)=>{
            return(
              <TeamChannelPreview {...previewProps}
              type="messaging"/>
            )
          }}/>
        </div>
      </div>
     )
}

const ChannelListContainer =({setCreateType, setIsCreating, setIsEditing})=>{
  const [toggleContainer, setToggleContainer] =useState(false);

   return(
   <>
   <div className='channel-list__container'>
   <ChannelListContent setIsCreating={setIsCreating} setCreateType={setCreateType} 
   setIsEditing={setIsEditing} setToggleContainer={setToggleContainer}/>
   </div>

   <div className='channel-list__container-responsive'
    style={{ left: toggleContainer? "0%" :"-79%" ,backgroundColor :"#005fff"}}>

    <div className='channel-list__container__toggle' onClick={()=>setToggleContainer((prevState)=>!prevState)}>

       <AiOutlineBars color='white' fontWeight ='bold'/></div>
       <ChannelListContent setIsCreating={setIsCreating} setIsEditing={setIsEditing} 
       setCreateType={setCreateType} setToggleContainer={setToggleContainer}/>
    
   </div>
   </>)
}
export default ChannelListContainer;
