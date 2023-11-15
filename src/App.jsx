import { useState } from "react";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";

import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
