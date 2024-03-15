import React from "react";

const TeamChannelList = ({
  children,
  error = false,
  loading,
  type,
  setCreateType,
  setIsCreating,
  setIsEditing,
  isCreating,
  setTogggleContainer
}) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error, Please wait and try again.
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "Channel" : "Messages"} loading...
        </p>
      </div>
    );
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Channels" : "Direct Messages"}
        </p>
        <AddChannel
          setCreateType={setCreateType}
          setIsCreating={setIsCreating}
          setIsEditing={setIsEditing}
          isCreating ={isCreating}
          setTogggleContainer ={setTogggleContainer}
          type ={type === 'team'? 'team' : 'messaging'}
        ></AddChannel>
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
