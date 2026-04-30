import { initializeApp, getApps, getApp, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getStorage } from 'firebase-admin/storage';
import admin from "firebase-admin";

const PROJECT_ID = "harmonyhill-1";

let appInstance: App | null = null;
let dbInstance: ReturnType<typeof getFirestore> | null = null;
let authInstance: ReturnType<typeof getAuth> | null = null;
let storageInstance: ReturnType<typeof getStorage> | null = null;

function getAdminApp(): App {
    if (appInstance) return appInstance;

    if (getApps().length > 0) {
        appInstance = getApp();
        return appInstance;
    }

    const isEmulator =
        process.env.FIRESTORE_EMULATOR_HOST ||
        process.env.NODE_ENV === 'development';

    if (isEmulator) {
        appInstance = initializeApp({
            projectId: PROJECT_ID,
        });
    } else {
        const credential: admin.ServiceAccount = {
            projectId: PROJECT_ID,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        };

        appInstance = initializeApp({
            credential: admin.credential.cert(credential),
            storageBucket: `${PROJECT_ID}.firebasestorage.app`,
        });
    }

    return appInstance;
}

export function getDb() {
    if (!dbInstance) {
        const app = getAdminApp();
        dbInstance = getFirestore(app);

        if (process.env.FUNCTIONS_EMULATOR === "true") {
            dbInstance.settings({
                host: "localhost:8080",
                ssl: false,
            });
        }
    }
    return dbInstance;
}

export function getAuthClient() {
    if (!authInstance) {
        const app = getAdminApp();
        authInstance = getAuth(app);
    }
    return authInstance;
}

export function getStorageClient() {
    if (!storageInstance) {
        const app = getAdminApp();
        storageInstance = getStorage(app);
    }
    return storageInstance;
}