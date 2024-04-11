import { useState } from 'react';
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer , ChannelContainer , Auth } from './components';
import "./App.css"
import 'stream-chat-react/dist/css/index.css'
import Profile from './components/Profile';


const cookies = new Cookies();


const apiKey = "th58g5yej5gw";
const authToken = cookies.get("token");
const clients = StreamChat.getInstance(apiKey);
console.log(clients)

if(authToken){
  clients.connectUser({
    id : cookies.get("userId"),
    name :cookies.get("userName"),
    fullName : cookies.get("fullName"),
    image : cookies.get("avatarUrl"),
    hashedPassword : cookies.get("hashedPassword"),
    phoneNumber : cookies.get("phoneNumber"),
  }, authToken)
}



function App() {
  const [createType , setCreateType] = useState('');
  const [isCreating , setIsCreating] = useState('');
  const [isEditing , setIsEditing] = useState('');
  const [isProfileToggled , setIsProfileToggled] = useState(false);
  console.log(isProfileToggled)
  if(!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
      <Chat client={clients} >
        <ChannelListContainer 
        isCreating={isCreating}
        setIsCreating={setIsCreating}
        setCreateType={setCreateType}
        setIsEditing={setIsEditing}
        setIsProfileToggled={setIsProfileToggled}
        />
        {!isProfileToggled && (
        <ChannelContainer 
        isCreating={isCreating}
        setIsCreating={setIsCreating}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        createType={createType}
        />)}
        
      </Chat>
      {isProfileToggled && (
        <Profile clients={clients} />
      )}
    </div>
  )
}

export default App
