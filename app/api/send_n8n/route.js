export async function POST(req) {
  const body = await req.json();

  const response = await fetch(
    "https://n8n.srv1105022.hstgr.cloud/webhook/website-Summary",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json().catch(() => ({}));

  return new Response(JSON.stringify(data), { status: 200 });
}
