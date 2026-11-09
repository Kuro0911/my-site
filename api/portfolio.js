import { readAdditions } from "../server/portfolio.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Use GET." });
  }

  try {
    const { additions } = await readAdditions();
    res.setHeader("Vercel-CDN-Cache-Control", "s-maxage=30");
    return res.status(200).json(additions);
  } catch {
    return res.status(503).json({ error: "Portfolio additions are unavailable." });
  }
}
