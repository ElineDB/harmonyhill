add ```"@harmonyhill/firebase-config": "*",``` to dependencies in apps/web/package.json to use it.
Then ``` const nextConfig = {transpilePackages: ["@harmonyhill/firebase-config"],};``` in harmonyhill/apps/web/next.config.js
Run ```npm install```
Add to code files ```import { db } from "@harmonyhill/firebase-config";```