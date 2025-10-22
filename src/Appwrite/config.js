import { Client, Databases, Storage, ID, Query } from "appwrite"
import config from "../Config/conf"

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async CreateArticle({ title, slug, content, featured, status, userID }) {
        try {

            return await this.databases.createDocument(
                config.appwriteDBID,
                config.appwriteCollectionID,
                slug,
                {
                    Title: title,
                    Content: content,
                    FeaturedImage: featured,
                    Status: status,
                    UserID: userID
                }
            )
        }
        catch (error) {
            throw error
        }
    }

    async updateArticle(slug, { title, content, featured, status }) {
        try {


            return await this.databases.updateDocument(
                config.appwriteDBID,
                config.appwriteCollectionID,
                slug,
                {
                    Title: title,
                    Content: content,
                    FeaturedImage: featured,
                    Status: status,
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deleteArticle(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDBID,
                config.appwriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            return false
        }
    }

    async getOneArticle(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDBID,
                config.appwriteCollectionID,
                slug
            )
        } catch (error) {
            return false
        }
    }

    async getAllArticles(queries = [Query.equal("Status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDBID,
                config.appwriteCollectionID,
                queries
            )
        } catch (error) {
            return false
        }
    }

    // File Upload

    async FileUpload(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            return false
        }
    }
    async FileDelete(fileID) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileID
            )
            return true
        } catch (error) {
            return false
        }
    }
    getPreview(fieldID){
        try {
            return this.bucket.getFileView(
                config.appwriteBucketID,
                fieldID
            )
        } catch (error) {
            
        }
    }
}

const service = new Service()

export default service