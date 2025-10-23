import quotes from '../../../../../db.json';

interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface QuotesData {
  quotes: Quote[];
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> } // 👈 new: params is async
) {
  const { id } = await context.params; // 👈 must await
  const data = quotes as QuotesData;
  const quote = data.quotes.find((q) => q.id === Number(id));

  if (!quote) {
    return new Response(JSON.stringify({ error: 'Quote not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return Response.json(quote);
}
