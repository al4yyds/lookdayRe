import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        https: false, // �T�O�o�̳]�m�� false
        port: 5173,
    },
});
