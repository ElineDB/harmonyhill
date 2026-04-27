/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@harmonyhill/firebase-config"],
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
