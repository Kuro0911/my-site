import { fileURLToPath } from "node:url";
import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";

const serverSource = ["api", "server"].map((directory) =>
  normalizePath(fileURLToPath(new URL(`./${directory}`, import.meta.url))) + "/**",
);

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      deny: [
        ".env",
        ".env.*",
        "*.{crt,pem,key,p12,pfx,cer,der}",
        ".npmrc",
        ".yarnrc.yml",
        "**/.git/**",
        ...serverSource,
      ],
    },
  },
});
