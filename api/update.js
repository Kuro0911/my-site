import { createHash, timingSafeEqual } from "node:crypto";
import { archivedPublications, browserTabs, timelineItems } from "../src/eva_v1.1/data/portfolioData.js";
import { readAdditions, saveAdditions, updateSchema } from "../server/portfolio.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Use POST." });
  }

  const digest = process.env.UPDATE_PASSWORD_SHA256;
  if (!/^[a-fA-F0-9]{64}$/.test(digest ?? "")) {
    return res.status(503).json({ error: "Updates are unavailable." });
  }

  const authorization = req.headers.authorization;
  if (typeof authorization !== "string" ||
      !authorization.startsWith("Bearer ") ||
      !timingSafeEqual(
        createHash("sha256").update(authorization.slice(7)).digest(),
        Buffer.from(digest, "hex"),
      )) {
    res.setHeader("WWW-Authenticate", "Bearer");
    return res.status(401).json({ error: "Invalid update password." });
  }

  if (req.headers["content-type"]?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return res.status(415).json({ error: "Use application/json." });
  }

  let body;
  try {
    body = req.body;
  } catch {
    return res.status(400).json({ error: "Invalid JSON." });
  }
  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid entry.",
      fields: parsed.error.issues.map(({ path, message }) => ({ path, message })),
    });
  }

  const { type, entry } = parsed.data;
  try {
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const { additions, sha } = await readAdditions();
      const items = type === "education" ? additions.education : additions.publications;
      const existing = type === "education" ? timelineItems : [...browserTabs, ...archivedPublications];
      const duplicate = [...existing, ...items].some((item) => type === "education"
        ? item.kind === "education" && item.org === entry.org && item.date === entry.date
        : item.id === entry.id);
      if (duplicate) return res.status(409).json({ error: "That entry already exists." });

      const savedEntry = { ...entry, kind: type };
      items.unshift(savedEntry);
      const result = await saveAdditions(additions, sha);
      if (result === "saved") return res.status(201).json(savedEntry);
      if (result === "full") return res.status(507).json({ error: "The portfolio data file is full." });
    }

    return res.status(409).json({ error: "The portfolio changed concurrently. Retry the request." });
  } catch {
    return res.status(502).json({ error: "The GitHub update could not be confirmed." });
  }
}
