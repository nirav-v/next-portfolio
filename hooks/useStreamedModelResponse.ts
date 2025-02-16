import { useState } from 'react';

export function useStreamedModelResponse() {
  const [streamedResponse, setStreamedResponse] = useState('');
  const [chatHistory, setChatHistory] = useState<
    { role: string; content: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchChatResponse = async (userMessage: string) => {
    if (!userMessage.trim()) return;

    setStreamedResponse('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_query: userMessage,
          chat_history: chatHistory,
        }),
      });

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let fullResponse = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullResponse += chunk;

        setStreamedResponse(prev => prev + chunk); // Update UI in real-time
      }

      // Update chat history after full response is received
      setChatHistory(prev => [
        ...prev,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: fullResponse },
      ]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return { streamedResponse, chatHistory, isLoading, error, fetchChatResponse };
}
