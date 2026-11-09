import { z } from "zod";

const text = (max) => z.string().trim().min(1).max(max);
const httpsUrl = z.url({ protocol: /^https$/ }).max(2048);
const education = z.strictObject({
  title: text(160),
  org: text(160),
  date: text(80),
  place: text(100).optional(),
  points: z.array(text(300)).max(6).default([]),
  logo: z.strictObject({ src: httpsUrl, fallback: text(30).optional() }).optional(),
});
const publication = z.strictObject({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(64),
  title: text(220),
  tabLabel: text(30),
  mobileLabel: text(8),
  eyebrow: text(100),
  abstract: text(900),
  figureLabel: text(100).default("Publication figure"),
  figure: httpsUrl.optional(),
  figureAlt: text(200).optional(),
  tags: z.array(text(40)).max(8).default([]),
  rows: z.array(z.tuple([text(40), text(160)])).max(3).default([]),
});

export const updateSchema = z.discriminatedUnion("type", [
  z.strictObject({ type: z.literal("education"), entry: education }),
  z.strictObject({ type: z.literal("publication"), entry: publication }),
]);
const additionsSchema = z.strictObject({
  education: z.array(education.extend({ kind: z.literal("education") })),
  publications: z.array(publication.extend({ kind: z.literal("publication") })),
});

const filePath = "portfolio-additions.json";

function githubRequest(method, params, body) {
  const { PORTFOLIO_GITHUB_REPO, PORTFOLIO_GITHUB_BRANCH, PORTFOLIO_GITHUB_TOKEN } = process.env;
  if (!/^[\w.-]+\/[\w.-]+$/.test(PORTFOLIO_GITHUB_REPO ?? "") ||
      !PORTFOLIO_GITHUB_BRANCH || !PORTFOLIO_GITHUB_TOKEN) {
    throw new Error("GitHub storage is not configured");
  }

  const url = new URL(`https://api.github.com/repos/${PORTFOLIO_GITHUB_REPO}/contents/${filePath}`);
  if (params) url.search = new URLSearchParams({ ref: PORTFOLIO_GITHUB_BRANCH });
  return fetch(url, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${PORTFOLIO_GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(body && { "Content-Type": "application/json" }),
    },
    body: body && JSON.stringify({ ...body, branch: PORTFOLIO_GITHUB_BRANCH }),
    signal: AbortSignal.timeout(8000),
  });
}

export async function readAdditions() {
  const response = await githubRequest("GET", true);
  if (!response.ok) throw new Error("Could not read portfolio additions from GitHub");
  const file = await response.json();
  if (file.encoding !== "base64" || typeof file.sha !== "string") {
    throw new Error("Invalid portfolio data file");
  }
  const json = Buffer.from(file.content, "base64").toString("utf8");
  return { additions: additionsSchema.parse(JSON.parse(json)), sha: file.sha };
}

export async function saveAdditions(additions, sha) {
  const content = JSON.stringify(additions, null, 2) + "\n";
  if (Buffer.byteLength(content) > 950_000) return "full";
  const response = await githubRequest("PUT", false, {
    message: "Add portfolio entry",
    content: Buffer.from(content).toString("base64"),
    sha,
  });
  if (response.status === 409) return "conflict";
  if (!response.ok) throw new Error("Could not save portfolio additions to GitHub");
  return "saved";
}
