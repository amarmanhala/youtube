import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start py-2">
      <p className="text-zinc-400 mx-1">{name}</p>
      <p className="text-white mx-2">{message}</p>
    </div>
  );
};

export default ChatMessage;
