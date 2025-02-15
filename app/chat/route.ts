import { getGptResponse } from '@/app/chat/utils/gpt';

export async function POST(req: Request) {
  const body = await req.json();

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const completion = await getGptResponse(
          body.user_query,
          JSON.parse(body.chat_history)
        );

        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content || '';
          console.log('Streaming chunk:', content);
          controller.enqueue(encoder.encode(content));
        }
      } catch (error) {
        console.error(error);
        controller.enqueue(encoder.encode('Error processing response.'));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Transfer-Encoding': 'chunked',
    },
  });
}
