export async function GET() {
  return Response.json({
    service: "raj-agripay",
    status: "ok",
    mode: "evaluation-sandbox",
    timestamp: new Date().toISOString(),
  });
}
