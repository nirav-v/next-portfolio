"use client";
import React, { useState } from "react";

/** This function is responsible for updating the chat history in localStorage */
const updateChatHistory = (user_query: string, modelResponse: string) => {
  const historyString = localStorage.getItem("chat-history");

  // parse the local storage history to array, if null default to empty arr
  const history = historyString ? JSON.parse(historyString) : [];

  // add the user query and the response received to the chat history
  const updatedHistory = [
    ...history,
    { role: "user", content: user_query },
    {
      role: "assistant",
      content: modelResponse,
    },
  ];

  // if history grows past 10, truncate the first query and response from the beginning of the chat history
  if (updatedHistory.length >= 10) {
    updatedHistory.splice(0, 2);
  }

  // write the updated history back to local storage
  localStorage.setItem("chat-history", JSON.stringify(updatedHistory));

  return updatedHistory;
};

export default function ChatInterface() {
  const [userQuery, setUserQuery] = useState("");
  const [modelResponse, setModelResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log(userQuery);
    fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_query: userQuery,
        chat_history: localStorage.getItem("chat-history"), // backend handles if this is null
      }),
    })
      .then(res => {
        setLoading(false);
        return res.json();
      })
      .then(data => {
        console.log(data);
        setModelResponse(data.modelResponse);
        updateChatHistory(userQuery, data.modelResponse);
      });
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setUserQuery(e.target.value)}
          value={userQuery}
          placeholder="Chat with Nirav: Ask me anything..."
          className="input input-bordered w-96 p-4 rounded-lg"
        />
      </form>
      {(modelResponse || loading) && (
        <div className="chat-bubble m-auto w-2/3 lg:w-1/2 my-4">
          {loading ? "Nirav is thinking..." : modelResponse}
        </div>
      )}
    </div>
  );
}
