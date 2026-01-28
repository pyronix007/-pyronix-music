import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],

  // ✅ Obligatoire pour GitHub Pages
  base: "/-pyronix-music/",

  define: {
    "process.env": process.env,
  },
})
