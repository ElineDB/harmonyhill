/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

// These two lines replace 'require' for finding your monorepo root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    // output: 'standalone',
    outputFileTracingRoot: path.join(__dirname, '../../'),
    // experimental: {turbo: false},
    transpilePackages: [
        "@harmonyhill/firebase-config", 
        // "@harmonyhill/database", 
        "@harmonyhill/utils"
    ],
    async redirects() {
        return [{
            source: '/junglenook',
            destination: '/',
            permanent: true, // send 301 redirect
        }, {
            // looks for any path that ends in .html, redirects to the page without .html
            source: '/:path*.html', 
            destination: '/:path*', // Redirects to the same path without .html
            permanent: true, // This tells Google it's a 301 (Permanent) move
        }];
    }
};

export default nextConfig;
