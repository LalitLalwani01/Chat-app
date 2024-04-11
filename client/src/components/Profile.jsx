import React, { useState } from "react";

function Profile({ clients }) {
  const [imageError, setImageError] = useState(false);
  console.log(clients);

  const handleError = () => {
    setImageError(true);
  };

  const getFirstLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    // <div style={{width:"100%"}}>
    //     <div style={{margin:'auto' , width:'20%'}}>
    //     {imageError || !clients.user.image ? (
    //     <div style={{ backgroundColor: "#006cff", width: '10rem', height: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', color: 'white', fontSize: '3rem' }}>
    //       <p>{getFirstLetter(clients.user.name)}</p>
    //     </div>
    //   ) : (
    //     <img src={clients.user.image} alt={clients.user.name} onError={handleError} />
    //   )}
    //     </div>
    //     <div style={{width:"20%" , margin:"auto"}}><div style={{fontFamily: "Helvetica Neue, sans-serif", display: 'grid', gridTemplateColumns: '1fr', gap: '20px', alignItems: 'center' }}>
    //         <p><strong>Name:</strong> {clients.user.name}</p>
    //         <p><strong>Username:</strong> {clients.user.name}</p>
    //         <p><strong>Phone Number:</strong> {clients.user.phoneNumber}</p>
    //         <p><strong>Role:</strong> {clients.user.role}</p>
    //       </div></div>

    // </div>

    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "70%",
          height: "70vh",
          display: "flex",
          borderRadius: "20px",
          boxShadow: "1px 1px 6px 4px #ebebeb",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "1",
            backgroundColor: "#0093E9",
            backgroundImage:
              "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
            borderRadius: "20px 0 0 20px",
          }}
          className="user-profile__right"
        >
          <div style={{    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"}}>
            {imageError || !clients.user.image ? (
              <div
                style={{
                  backgroundColor: "#93d5cf",
                  width: "8rem",
                  height: "8rem",
                  
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "3rem",
                }}
              >
                <p style={{fontFamily:"sans-serif",fontWeight:"600"}}>{getFirstLetter(clients.user.name)}</p>
              </div>
            ) : (
              <img
                src={clients.user.image}
                alt={clients.user.name}
                onError={handleError}
              />
            )}
            <p style={{fontFamily:"sans-serif", fontWeight:"600" , fontSize : "1.5rem" , color:"white"}}>{clients.user.fullName}</p>
          </div>
        </div>
        <div style={{ flex: "3" }}>
          <div style={{width:"80%" , margin:"auto"}}>
          <div style={{borderBottom : "1px solid #bfbfbf"}}>
            <h3 style={{fontFamily:"sans-serif",color:"#7d7d7d"}}>Information</h3>
          </div>
          <div style={{display:"grid" , gridTemplateColumns:"repeat(2,1fr)" , gap:"15px"}}>
            <div>
              <h4 style={{fontFamily:"sans-serif",color:"#7d7d7d"}}>User Name</h4>
              <p style={{fontFamily:"sans-serif",color:"#7d7d7d"}}>{clients.user.name}</p>
            </div>
            
            <div>
              <h4 style={{fontFamily:"sans-serif",color:"#7d7d7d"}}>Full Name</h4>
              <p style={{fontFamily:"sans-serif" ,color:"#7d7d7d"}}>{clients.user.fullName}</p>
            </div>
            <div>
              <h4 style={{fontFamily:"sans-serif",color:"#7d7d7d"}}>Phone Number</h4>
              <p style={{fontFamily:"sans-serif" ,color:"#7d7d7d"}}>{clients.user.phoneNumber}</p>
            </div>
            <div>
              <h4 style={{fontFamily:"sans-serif",color:"#7d7d7d"}}>Dashboard User</h4>
              <p style={{fontFamily:"sans-serif" ,color:"#7d7d7d"}}>{clients.user.dashboard_user ? "True" : "False"}</p>
            </div>
            <div>
              <h4 style={{fontFamily:"sans-serif",color:"#7d7d7d"}}>Role</h4>
              <p style={{fontFamily:"sans-serif",color:"#7d7d7d"}}>{clients.user.role}</p>
            </div>
            <div>
              <h4 style={{fontFamily:"sans-serif",color:"#7d7d7d"}}>Online</h4>
              <p style={{fontFamily:"sans-serif",color:"#7d7d7d"}}>{clients.user.online ? "True" : "False"}</p>
            </div>
            
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Profile;
