# Dhananjai Sharma portfolio

## Run locally

Use Node.js 24 and run `npm ci`, then `npm run dev` for the frontend or `npm run build` for the production build. Use `npx vercel dev` with the Vercel project linked to exercise the API locally.

The resume button opens the Google Docs PDF export URL. Google generates the PDF from the current document on request. Keep the document readable by signed-out visitors and allow viewers to download it.

## Deploy the API

1. Import the GitHub source repository into Vercel and use the Vite framework preset. The `vercel.json` rewrite exposes the server function at `POST /update`. GitHub Pages serves static files and requires a server host such as Vercel for this endpoint.
2. Create a GitHub branch for the data, such as `portfolio-data`, and commit the included `portfolio-additions.json` at its root. This can be in the same repository or a dedicated data repository. Keep Vercel's production branch pointed at the site source branch. If using the same repository, disable preview deployments for the data branch in Vercel.
3. Create a GitHub fine-grained token restricted to the data repository with **Contents: Read and write**. The data branch must allow writes from the token's account.
4. Generate a 256-bit random password locally with `openssl rand -hex 32` and keep it in your password manager. Enter it at the prompt below to compute the SHA-256 hex digest without storing the password in your shell history.

   ```bash
   read -rsp 'Update password: ' portfolio_password
   printf '\n'
   printf '%s' "$portfolio_password" | openssl dgst -sha256
   unset portfolio_password
   ```

5. Save the 64-character hex digest as the GitHub Actions repository secret `UPDATE_PASSWORD_SHA256`. Configure the same digest as a sensitive Vercel environment variable for the server to use. GitHub Actions secrets are scoped to Actions, so the Vercel Git integration does not automatically copy them. Keep the digest and token out of source control.

| Vercel server environment variable | Value |
| --- | --- |
| `UPDATE_PASSWORD_SHA256` | The 64-character hex digest |
| `PORTFOLIO_GITHUB_REPO` | The data repository as `owner/repository` |
| `PORTFOLIO_GITHUB_BRANCH` | The branch with `portfolio-additions.json` |
| `PORTFOLIO_GITHUB_TOKEN` | The fine-grained GitHub token |

Deploy or redeploy after setting the variables. Use the HTTPS production URL for update requests. The API accepts the original password as a Bearer credential and compares its hash server-side. The frontend reads public entries from `GET /api/portfolio`. Updates appear after refreshing the site once the CDN cache expires, within 30 seconds of the last cached read.

## Add an entry

Save either example as `entry.json`. The API adds one entry per request and returns HTTP `201` for a successful addition. Education is keyed by institution and date. Publications are keyed by ID.

```json
{
  "type": "education",
  "entry": {
    "title": "Degree or programme name",
    "org": "Institution name",
    "date": "Aug 2026 — Present",
    "place": "Singapore",
    "points": ["Research focus or coursework."]
  }
}
```

```json
{
  "type": "publication",
  "entry": {
    "id": "paper-example",
    "title": "Paper title",
    "tabLabel": "Paper Title",
    "mobileLabel": "Paper",
    "eyebrow": "VENUE · YEAR",
    "abstract": "A brief summary of the paper.",
    "tags": ["AI Security"],
    "rows": [["Venue", "Conference or journal name"]]
  }
}
```

```bash
read -rsp 'Update password: ' portfolio_password
printf '\n'
printf 'Authorization: Bearer %s\n' "$portfolio_password" | curl --fail-with-body \
  --header @- \
  --header 'Content-Type: application/json' \
  --data-binary @entry.json \
  https://YOUR-SITE/update
unset portfolio_password
```
