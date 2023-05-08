import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomName, getRandomSentence } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const pollData = setInterval(() => {
      //console.log("New message")
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomSentence(),
        })
      );
    }, 5000);
    return () => {
      clearInterval(pollData);
    };
  }, []);
  return (
    <div className="bg-zinc-900 w-96 h-96 overflow-y-scroll border border-zinc-500 flex flex-col px-4">
      <div className="py-4">
        <h2 className="text-white">Live Chat</h2>
      </div>
      <div className="flex w-full overflow-y-scroll flex-col flex-col-reverse">
        {chatMessages.map((chat, index) => {
          return (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          );
        })}
      </div>
      <form className="w-full" onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
          name: "Amar",
          message: message
        }));
        setMessage("");
      }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="type something..."
          className="text-white w-full border border-blue-600 bg-transparent p-2 outline-none"
        ></input>
      </form>
    </div>
  );
};

export default LiveChat;
