import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@fontsource-variable/fredoka";
import "@fontsource-variable/dm-sans";
import "./index.css";
import App from "@/App";
import { langFromPath } from "@/i18n/config";
import { loadDict } from "@/i18n/load";

const root = document.getElementById("root")!;
const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

// Load the copy for the language in the URL, then attach React. Pages are
// prerendered, so the visitor already sees the content while this runs.
void loadDict(langFromPath(pathname)).then(() => {
  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );

  // Hydrate only when the static HTML was rendered for this exact URL. The
  // shared 404.html is served for unknown paths, so render those fresh.
  if (root.dataset.ssrPath === pathname && root.firstElementChild) {
    hydrateRoot(root, app);
  } else {
    root.textContent = "";
    createRoot(root).render(app);
  }
});
