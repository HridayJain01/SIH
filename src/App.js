import React from "react";
import Navi from "./components/navbar/navbar";
import Chatbot from "./components/chatbot/chatbot";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Service from "./pages/service/service";
import Register from "./pages/register/register";
import Chatbot1 from "./components/chatbot/chatbot1";

const App = () => {
  return (
    <div>
      <Chatbot />
      <Navi />
      <EmergencyButton />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/service" Component={Service} />
        <Route path="/register" Component={Register} />
        <Route path="/chatbot" Component={Chatbot} />
        <Route path="/emergencybutton" Component={EmergencyButton} />

      </Routes>
    </div>
  );
};

export default App;
