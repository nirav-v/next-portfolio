import { getGptResponse } from '@/utils/gpt';

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);

  const modelResponse = await getGptResponse(body.user_query);

  return Response.json({ modelResponse });
}
