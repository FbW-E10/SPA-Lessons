import React from "react";

import Interests from "./Interests";

function Profile({userProps, themeProps}) {
  
  if (!userProps.user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{userProps.user.name}'s Profile</h2>
      <Interests theme={themeProps.theme}  interests={userProps.user.interests} />
    </div>
  );
}

export default Profile;
