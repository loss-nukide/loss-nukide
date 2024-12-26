import react from "@vitejs/plugin-react";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const PACKAGE_ROOT = dirname(__filename);
console.log(PACKAGE_ROOT);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@base": join(PACKAGE_ROOT, "src/components/base") + "/",
      "@layout": join(PACKAGE_ROOT, "src/components/layout") + "/",
      "@page": join(PACKAGE_ROOT, "src/components/page") + "/",
      "@public": join(PACKAGE_ROOT, "public") + "/",
      "@": join(PACKAGE_ROOT, "src") + "/",
    },
  },
});
