// main.ts
export default function handler(req: Request): Response {
  return new Response("Hello, Deno!", {
    headers: { "Content-Type": "text/plain" },
  });
}
