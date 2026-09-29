import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { asset } from "./asset";
import "./index.css";

const rootStyle = document.documentElement.style;
rootStyle.setProperty(
  "--promo-bg-mobile",
  `url("${asset("images/promo-mobile-bg.jpg")}")`,
);
rootStyle.setProperty(
  "--promo-bg-tablet",
  `url("${asset("images/promo-tablet-bg.jpg")}")`,
);
rootStyle.setProperty(
  "--promo-bg-desktop",
  `url("${asset("images/promo-desktop-bg.jpg")}")`,
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
