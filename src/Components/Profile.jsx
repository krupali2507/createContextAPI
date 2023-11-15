import React, { useContext } from "react";
import UserContext from "../Context/UserContext.js";

function Profile() {
  const { credentials } = useContext(UserContext);

  if (!credentials) return <h1>Not Logged in!</h1>;
  return <h1>Profile: {credentials.username} </h1>;
}

export default Profile;
