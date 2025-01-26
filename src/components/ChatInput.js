"use client"

import React, { useState } from "react";

export const ChatInput = ({ onSend }) => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };

    return (
        <div className="flex items-center p-2 border-t">
            <input
                type="text"
                className="flex-1 p-2 border rounded-lg"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                onClick={handleSend}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
                Send
            </button>
        </div>
    );
};