import React from 'react';
import { Chatbot, Message, MessageText } from 'react-chatbot-kit';


const config = {
  initialMessages: [Message.text('Hello! How can I assist you today?', 'bot')],
};


const messageHandler = (message) => {
  if (message.toLowerCase().includes('emergency')) {
    return Message.text(
      "I'm really sorry to hear that you're in an emergency situation.  Reporting to the nearest authorities...",
      'bot'
    );
  } else {
    return Message.text("I can provide information and resources related to women's safety. How can I assist you?", 'bot');
  }
};

const ChatbotComponent = () => {
  return (
    <div className="chatbot">
      <Chatbot config={config} messageHandler={messageHandler}>
        <Message customComponent={MessageText} />
      </Chatbot>
    </div>
  );
};