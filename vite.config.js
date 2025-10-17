import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/home": {
        target: "http://localhost:3005",
        changeOrigin: true,
      },
    },
  },
});
