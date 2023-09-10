import React from "react";
import Navi from "./components/navbar/navbar";
import Chatbot from "./components/chatbot/chatbot";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Chatbot from "./components/chatbot/chatbot";
import EmergencyButton from "./components/emergencybutton/emergencybutton"
import Dashboard from "./pages/dashboard/dashboard";
import Aboutus from "./pages/about us/about us";
import GoogleForm from "./pages/repo/googleform";
import LoginForm from "./pages/login/login";
import RegisterForm from "./pages/register/register";


const App = () => {
  return (
    <div>
      <Chatbot />
      <Navi />
      <EmergencyButton />

      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/register" Component={Register} />
        <Route path="/chatbot" Component={Chatbot} />
        <Route path="/emergencybutton" Component={EmergencyButton} />
        <Route path="/repo" Component={GoogleForm} />
        <Route path="/login" Component={LoginForm} />
        <Route path="/register" Component={RegisterForm} />

      </Routes>
    </div>
  );
};

export default App;
