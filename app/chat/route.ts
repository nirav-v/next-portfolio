import { getGptResponse } from "@/utils/gpt";

export async function POST(req: Request) {
  const body = await req.json();

  // pass most recent query along with updated chat history
  const modelResponse = await getGptResponse(
    body.user_query,
    JSON.parse(body.chat_history)
  );

  return Response.json({ modelResponse });
}
