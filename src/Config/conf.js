const config = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDBID: String(import.meta.env.VITE_APPWRITE_DB_ID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKETID),
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTIONID)
}


export default config