"use client"

import React from "react";

export const ChatMessage = ({ message, sender }) => {
    const isCustomer = sender === "customer";
    return (
        <div
            className={`$ {
        isCustomer ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"
      } rounded-lg p-3 m-2 max-w-xs`}
        >
            {message}
        </div>
    );
};