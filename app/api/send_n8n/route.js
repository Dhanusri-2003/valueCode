export async function POST(req) {
  const body = await req.json();

  const response = await fetch(
    "https://n8n.srv1105022.hstgr.cloud/webhook-test/aab213c1-8a38-4e3a-8050-d03df672da73",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json().catch(() => ({}));

  return new Response(JSON.stringify(data), { status: 200 });
}
