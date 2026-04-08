/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@harmonyhill/firebase-config"],
    async redirects() {
        return [{
            source: '/junglenook',
            destination: '/',
            permanent: true, // send 301 redirect
        }];
    }
};

export default nextConfig;
