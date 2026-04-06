import 'server-only';

import { initializeApp, getApps, getApp, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getStorage, Storage } from 'firebase-admin/storage';
import { setGlobalOptions } from "firebase-functions/v2";
import admin from "firebase-admin";

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
process.env.GCLOUD_PROJECT = PROJECT_ID;
process.env.GOOGLE_CLOUD_PROJECT = PROJECT_ID;

// import dotenv from 'dotenv';
// dotenv.config(); // for the seeder script in the local env
// console.log('API KEY:', process.env.FIREBASE_API_KEY);

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    // Use the default host and port for the Firestore emulator
    process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
    process.env.FIREBASE_STORAGE_EMULATOR_HOST = "127.0.0.1:9199";
}

const getAdminApp = (): App => {
    if (getApps().length > 0) {
        return getApp();
    }

    const isEmulator = process.env.FIRESTORE_EMULATOR_HOST || process.env.NODE_ENV === 'development';

    if (isEmulator) {
        // In emulator mode, just the project ID is enough
        return initializeApp({
            projectId: PROJECT_ID,
        });
    } else {
        //const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || "";
        // const serviceAccount = require(serviceAccountPath);
        const credential: admin.ServiceAccount = {
            projectId: PROJECT_ID,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        }

        const appOptions = {
            credential: isEmulator ? admin.credential.applicationDefault() : admin.credential.cert(credential),
            storageBucket: `${PROJECT_ID}.firebasestorage.app`
        };

        return initializeApp(appOptions);
    }
}

const app = getAdminApp();

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Only when running Firestore emulator
if (process.env.FUNCTIONS_EMULATOR === "true") {
    db.settings({
        host: "localhost:8080",
        ssl: false,
    });
}

// To get more time for step debugging during development
if (process.env.FUNCTIONS_EMULATOR === "true") {
    setGlobalOptions({ timeoutSeconds: 300 });
} else {
    setGlobalOptions({ timeoutSeconds: 60 });
}

export {
    db,
    auth,
    storage,
};
