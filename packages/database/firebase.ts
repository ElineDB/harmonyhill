import 'server-only';

import { initializeApp, getApps, getApp, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getStorage, Storage } from 'firebase-admin/storage';
import { setGlobalOptions } from "firebase-functions/v2";
import admin from "firebase-admin";

const PROJECT_ID = "harmonyhill-1";

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
            privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDf968XMJUUIOo/\ns8GcdfzSzqUppULex8bP8CVkUcPv7PH+lCm04bSmglvSqKl830qgWtLnEVMwqGIp\nGQAX+KRf7/g5XchhzyaYfzbTav0gQ+E2iXjGwL3Mhl4iT1JTlMNTuB5WuKxG3DY7\ncMcmihuh2Ah2jaU8DCNyQ4YmPLZEfdjuNvMiTboCuF+7yLcPiFKk/U6ME8fjFvDG\nosq8K+zAYN+g+ZxW4oVEozylzEYCgNpJ8rqneqEvA4x+69eLrTl2BWg92hnI2Lse\nvbjAohlPLhcqYhBcSuI2x7tzcJ0gJWSa7chDl8c9xiavwjjOCM5U/Pqm3npr5Cda\n0FGkW+IhAgMBAAECggEAFk7wTeyFD44JwdJGA4TNwTJbyYP7Caq3gbMcs7CLRjor\n49zeh0mrZKHRGJtmf8LUBu3qWkwOT7yYmRmy5IWxMGx8JTv9/3QSluz7nopmb9DN\nvXtq9XfG+qNwUUA6ZeCIUNii46YduX8qGGNENZwFuD9cSca+bHaUZJzCNMvQ/I2m\nsgApcaYxL5ccZnmMoGRdlr/kzR1rCrhS0SjFJIoc/BZIzLniepltV28/I6UaH3Ho\ni366xBrwjjQExdvVpqe9mJYj2V/9Rtnne50pO7lYA1UdhEgp6SO1ZpVPhG+QRP8O\nT8ZZMq5Q+oAqxJIyKdfJdUIc2wLpzcPudGDgrQp0kwKBgQD9YRiSGUbDBkApZcf/\nVS62mZitnpAFmw4BYJTGdYm4QNa+opn6F2Ur6cS0aBpvt4ScaMJYWCRnTGuNoqib\nVA7oHl7COkk7y2zhk1HIXE9TaqQEPPoVBqnGNTSg3oQWR+8VVVc41Q4+LVEw7lYc\nrjruOUqwvGraOC+5eXXE9e2S0wKBgQDiSLX0JqgX0ATWTdJSA+ULlCsijTqnIaj9\ndWDnA8CplAu+leL0tVA2hC/nZ4/lycc28SwPWNG2kakgrTEd4jBqi79j5N2VBTzo\nShS70Dfu11MoKSOh8qDwGSEIGC+AM5gIN8O2e+Ioq5lSq493s0Eda/UH9Hy0hbRG\n3FB9As6WuwKBgQC2J/atGcTYcgbwe/6jHo8dsSClOMgbb5RLAy8R2fAvaVW46Va/\nB9CxGDdU5z6SMCIC/AEz1/Ib3UG5KkYCnRS2ZRcElTiO5zkYlnuGCm7w7kqJzXiQ\nYyDsoNV8DVxyVDaaZKb28ZxysMuc3MtFhTBSkReUJXC//wK4WYyEE7U/BwKBgQCM\naQXOm/YN4Jw/xkZNcfE8QBKL/Ap7Dp3nuGAKuP9humWXOzZ7Fc7SJS/8bPyTX6Nn\n6jqmwzxOBxBlIFKr8mCMnG6EM81y3K8wjFdVOxyZ7a7B6tUbdox6r30ZorhG2rzp\nzIB6yWBKUEBxVddONUKgWQ7QgtqmwZhdp/Ohvo4mZQKBgQDvITOUNQbVuuyyLL6v\nuJxTAE5SDd1dPtHvjaNAP+gIurOe+OqhLrUCM10jAaDHMtzq1g0+u+j6A+TfwnzP\n4uGJdSiddhBM7QUjMGSZzgS67tDJwj3SCMR/qvqB4Adntb5DYn0hnrWZgt/EkjK6\nCsZot7LFG0DnFmoRFBsw7UvadA==\n-----END PRIVATE KEY-----\n",
            clientEmail: "firebase-adminsdk-fbsvc@harmonyhill-1.iam.gserviceaccount.com",
        }

        return initializeApp({
            credential: isEmulator ? admin.credential.applicationDefault() : admin.credential.cert(credential),
            storageBucket: `${PROJECT_ID}.firebasestorage.app`
        });
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

// Only when running RTDB emulator locally
// todo: apprently replaced by FIRESTORE_EMULATOR_HOST in .env.local
// if (process.env.FIREBASE_DATABASE_EMULATOR_HOST) {
//     db.useEmulator("localhost", 9000); // 9000 is the default port
// }

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
