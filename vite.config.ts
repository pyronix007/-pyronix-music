import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],

  // ✅ GitHub Pages base path
  base: "/-pyronix-music/",

  define: {
    "process.env": process.env,
  },
})
