import React ,  { useEffect , useState } from 'react';
import { useChatContext } from 'stream-chat-react';
import { CiSearch } from "react-icons/ci";
import { ResultDropdown } from './index';


function ChannelSearch({setToggleContainer}) {

    const { client ,  setActiveChannel } = useChatContext()

    const [query , setQuery] = useState('');
    const [loading , setLoading] = useState(false);
    const [teamChannels , setTeamChannels] = useState([]);
    const [directChannels , setDirectChannels] = useState([])

    useEffect(() => {
        if(!query) {
            setTeamChannels([]);
            setDirectChannels([]);
        }
    }, [query])
 
    const getChannels = async (text) => {
        try {
            const channelResponse = client.queryChannels({
                type: 'team', 
                name: { $autocomplete: text }, 
                members: { $in: [client.userID]}
            });
            const userResponse = client.queryUsers({
                id: { $ne: client.userID },
                name: { $autocomplete: text }
            })

            const [channels, { users }] = await Promise.all([channelResponse, userResponse]);

            if(channels.length) {
                setTeamChannels(channels);
            }
            if(users.length) {
            setDirectChannels(users);
            }
        } catch (error) {
            setQuery('')
        }
    }
    const onSearch = (e)=>{
        e.preventDefault();
        setLoading(true);
        setQuery(e.target.value);
        getChannels(e.target.value);
    }

    const setChannel = (channel) => {
        setQuery('');
        setActiveChannel(channel);
    }
  return (
    <div className='channel-search__container'>
        <div className='channel-search__input__wrapper'>
            <div className='channel-search__input__icon'>
            <CiSearch />
            </div>
            <input type="text" className='channel-search__input__text' placeholder='Search' value={query} onChange={onSearch} />
        </div>
        { query && (
                <ResultDropdown 
                    teamChannels={teamChannels}
                    directChannels={directChannels}
                    loading={loading}
                    setChannel={setChannel}
                    setQuery={setQuery}
                    setToggleContainer={setToggleContainer}
                />
            )}
    </div>
  )
}

export default ChannelSearch