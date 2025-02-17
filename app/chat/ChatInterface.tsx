'use client';
import React, { useState } from 'react';
import './chat.css';

/** This function is responsible for updating the chat history in localStorage */
const updateChatHistory = (user_query: string, modelResponse: string) => {
  const historyString = localStorage.getItem('chat-history');

  // parse the local storage history to array, if null default to empty arr
  const history = historyString ? JSON.parse(historyString) : [];

  // add the user query and the response received to the chat history
  const updatedHistory = [
    ...history,
    { role: 'user', content: user_query },
    {
      role: 'assistant',
      content: modelResponse,
    },
  ];

  // if history grows past 10, truncate the first query and response from the beginning of the chat history
  if (updatedHistory.length >= 10) {
    updatedHistory.splice(0, 2);
  }

  // write the updated history back to local storage
  localStorage.setItem('chat-history', JSON.stringify(updatedHistory));

  return updatedHistory;
};

export default function ChatInterface() {
  const [userQuery, setUserQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [streamedModelResponse, setStreamedModelResponse] = useState('');

  console.log('streamed response', streamedModelResponse);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // clear previous response
    setStreamedModelResponse('');
    setLoading(true);
    e.preventDefault();
    console.log(userQuery);

    const response = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_query: userQuery,
        chat_history: localStorage.getItem('chat-history'), // backend handles if this is null
      }),
    });

    setLoading(false);

    const reader = response.body?.getReader();
    if (!reader) {
      console.log('No reader found in response body');
      return;
    }

    const decoder = new TextDecoder();
    let fullResponse = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      fullResponse += chunk;

      setStreamedModelResponse(prev => prev + chunk); // Append chunk to UI in real-time
    }

    updateChatHistory(userQuery, fullResponse);

    setUserQuery('');
  };

  return (
    <div className='my-5 w-full'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={e => setUserQuery(e.target.value)}
          value={userQuery}
          placeholder='Chat with Nirav: Ask me anything...'
          className='chat-input input input-bordered w-10/12 sm:w-96 p-4 rounded-lg focus:w-11/12 sm:focus:w-8/12 xl:focus:w-6/12'
        />
      </form>
      {(streamedModelResponse || loading) && (
        <div className='chat-bubble m-auto w-2/3 lg:w-1/2 my-4'>
          {loading ? 'Nirav is thinking...' : streamedModelResponse}
        </div>
      )}
    </div>
  );
}
