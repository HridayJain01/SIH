import React from "react";
import "./chatbot.css";
import { Link } from "react-router-dom";

const Chatbot = () => {
  return (
    <div>
      <Link to="/chatbot1">
        <img
          id="imgchatbot"
          src="https://cdn-icons-png.flaticon.com/512/2548/2548881.png"
          alt="chatbot"
        />
      </Link>
    </div>
  );
};

export default Chatbot;

{
  /* <div>
      <img
        id="imgchatbot"
        src="https://cdn-icons-png.flaticon.com/512/2548/2548881.png"
        alt="chatbot"
      />
    </div> */
}
