import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import "dotenv/config";

const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      "process.env.REACT_APP_BACK_END_URL": JSON.stringify(
        process.env.REACT_APP_BACK_END_URL
      ),
    }),
  ],
});
