import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
// Two builds run from this config:
//   1. client build  -> dist/        (served to browsers)
//   2. ssr build     -> dist-ssr/    (used only by scripts/prerender.mjs to
//                                     write static HTML for every route)
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: isSsrBuild
    ? {
        emptyOutDir: true,
        rollupOptions: {
          // The server bundle imports every dictionary up front on purpose.
          onwarn(warning, warn) {
            if (warning.message.includes("dynamic import will not move module")) return;
            warn(warning);
          },
        },
      }
    : {
        target: "es2020",
        manifest: true,
        rollupOptions: {
          output: {
            // Keep large third-party libraries in their own cacheable chunks.
            // Motion is left to Rollup on purpose: the small `m` component
            // stays in the main chunk and the animation features load
            // later through <LazyMotion> (components/motion-features.ts).
            manualChunks(id: string) {
              if (!id.includes("node_modules")) return undefined;
              if (id.includes("@phosphor-icons")) return "icons";
              if (
                id.includes("react-router") ||
                id.includes("react-dom") ||
                /node_modules[\\/]react[\\/]/.test(id) ||
                id.includes("scheduler")
              ) {
                return "react-vendor";
              }
              return undefined;
            },
          },
        },
      },
}));
