"use client"

import { useState } from "react";

import axios from "axios";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    const customerMessage = { sender: "customer", message };
    setMessages((prev) => [...prev, customerMessage]);

    try {
      const response = await axios.post("/api/chat", { message });
      const aiMessage = { sender: "ai", message: response.data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} sender={msg.sender} />

        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatPage;