import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import fs from 'fs';

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem')
    }
  }
});
