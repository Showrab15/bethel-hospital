import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routers";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="overflow-x-hidden mx-auto max-w-screen-2xl ">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
