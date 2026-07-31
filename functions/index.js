export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // API Health Check Route
    if (url.pathname === '/api/health') {
      return new Response(JSON.stringify({ status: "online", store: "Netsorna Boutique" }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // Fallback to serve static frontend/admin assets from public/
    return env.ASSETS.fetch(request);
  }
};
