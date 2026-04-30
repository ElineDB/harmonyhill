
import * as utils from '@harmonyhill/utils';
import { getDownloadURL } from "firebase-admin/storage";
import { getDb, getStorageClient } from "./firebase.js";
import { Storage } from "firebase-admin/storage";
import { Timestamp, Firestore, WhereFilterOp, Query, DocumentData } from 'firebase-admin/firestore';

export type CollectionFilter = [string, WhereFilterOp, any];

export interface DatabaseAdapter {
    get: (collectionName: string, filters?: CollectionFilter[], orderByField?: string | null) => Promise<any[]>;
    getCollectionGroup: (collectionName: string, filters?: CollectionFilter[], orderByField?: string | null) => Promise<any[]>;
    getOne: (path: string, id: string) => Promise<any>;
    add: (path: string, id: string, data: any) => Promise<Boolean>;
    getFile: (path: string) => Promise<string | false>;
    toTimestamp: (inputDate: any) => any;
    makeActivityId?: (activity: any) => string;
}

function logError(message: string, e: unknown): void {
    if (e instanceof Error) {
        console.error(`${message}: ${e.message}`);
    } else {
        console.error(`${message}: ${String(e)}`);
    }
}

async function makeFirestoreAdapter(db: Firestore, storage: Storage): Promise<DatabaseAdapter> {
    const toTimestamp = (inputDate: any) => {
        if (utils.isEmpty(inputDate)) return null;
        const jsDate = utils.toJsDate(inputDate);
        return Timestamp.fromDate(jsDate);
    }

    let adapter: DatabaseAdapter = {
        toTimestamp,

        async get(collectionName: string, filters: CollectionFilter[] = [], orderByField = null): Promise<any[]> {
            try {
                let query: Query<DocumentData> = db.collection(collectionName);


                for (let [fieldName, comparator, value] of filters) {
                    const cleanedValue = utils.isDate(value) ? toTimestamp(value) : value;
                    query = query.where(fieldName, comparator, cleanedValue);
                }

                if (orderByField) {
                    query = query.orderBy(orderByField);
                }

                const snapshot = await query.get();
                if (snapshot.empty) {
                    return [];
                }
                const docs = snapshot.docs.map((doc) => ({ id: doc.id, ref: doc.ref, ...doc.data() }));
                return docs;
            } catch (e: unknown) {
                logError(`Couldn't get data from '${collectionName}'`, e);
                return [];
            }
        },

        async getCollectionGroup(collectionName: string, filters: CollectionFilter[] = [], orderByField: string | null = null): Promise<any[]> {
            try {
                let query: Query<DocumentData> = db.collectionGroup(collectionName);

                for (const [fieldName, comparator, value] of filters) {
                    const cleanedValue = utils.isDate(value) ? toTimestamp(value) : value;
                    query = query.where(fieldName, comparator, cleanedValue);
                }
                if (orderByField) {
                    query = query.orderBy(orderByField);
                }
                const snapshot = await query.get();
                if (snapshot.empty) {
                    return [];
                }
                const docs = snapshot.docs.map((doc) => ({ id: doc.id, ref: doc.ref, ...doc.data() }));
                return docs;
            } catch (e) {
                logError(`Couldn't get data from '${collectionName}'`, e);
                return [];
            }
        },

        async getOne(path: string, id: string): Promise<any> {
            try {
                const docRef = db.collection(path).doc(id);
                const docSnapshot = await docRef.get();
                if (!docSnapshot.exists) return null;
                return { ...docSnapshot.data(), id: docSnapshot.id, ref: docSnapshot.ref };
            } catch (e) {
                logError(`Error getting one document ${path}/${id}'`, e);
                return null;
            }
        },

        async add(path: string, id: string, data: any): Promise<Boolean> {
            try {
                for (const [key, value] of Object.entries(data)) {
                    if (utils.isDate(value)) {
                        data[key] = toTimestamp(value);
                    }
                }
                const pathString = Array.isArray(path) ? path.join('/') : path;
                const docRef = db.collection(pathString).doc(id);
                await docRef.set(data);
                return true;
            } catch (e) {
                logError(`Error adding document ${path}/${id}`, e);
                return false;
            }
        },

        async getFile(path: string): Promise<string | false> {
            try {
                const bucket = storage.bucket();
                const fileRef = bucket.file(path);
                const url = await getDownloadURL(fileRef);
                return url;
            } catch (e) {
                return false;
            }
        },

        makeActivityId(activity: any): string {
            const houseShort = activity.house.trim().toLowerCase() === "harmony hill" ? "hh" : "jn";
            const startingAt = utils.to_YYMMdd(activity.startingAt);
            const subCategory = activity.subCategory.trim().toLowerCase().replace(/ /g, '-');
            return `${startingAt}-${houseShort}-${subCategory}-${Date.now()}`;
        }
    }

    return adapter;
}

export const makeAdapter = async (): Promise<DatabaseAdapter> => {
    const db = getDb();
    const storage = getStorageClient();
    return makeFirestoreAdapter(db, storage);
}
