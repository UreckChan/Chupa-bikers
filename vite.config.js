import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


const manifestForPlugin = {
  registerType: "autoUpdate", // Cambia de "prompt" a "autoUpdate"
  includeAssets: ['favicon.ico', "apple-touch-icon.png", "masked-icon.png"],
  manifest: {
    name: "Chupa-Bikers",
    short_name: "Bikers",
    description: "Ciclistas con causa.",
    icons: [
      {
        src: "images/bicicleta.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "./logoo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: 'favicon'
      }
    ],
    theme_color: "#19223C",
    background_color: "#242424",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};




// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react(), VitePWA(manifestForPlugin)],
});


