"use client";
import React, { useState } from "react";

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
      body: JSON.stringify({ user_query: userQuery }),
    })
      .then(res => {
        setLoading(false);
        return res.json();
      })
      .then(data => {
        console.log(data);
        setModelResponse(data.modelResponse);
      });
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setUserQuery(e.target.value)}
          value={userQuery}
          placeholder="Chat with AI Nirav: Ask me anything..."
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
