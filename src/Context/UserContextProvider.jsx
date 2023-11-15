import React, { useState } from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
  const [credentials, setCredentials] = useState(null);

  return (
    <UserContext.Provider value={{ credentials, setCredentials }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
