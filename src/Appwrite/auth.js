import { Account, Client, ID } from "appwrite";
import config from "../Config/conf";

export class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);
        this.account = new Account(this.client)
    }
    async createUser({ email, password, name }) {
        try {
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if (user) {
                await this.Login({ email, password })
            }
            else {
                return user
            }
        } catch (err) {
            throw err
        }
    }
    async Login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            )
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error);
        }
    }
    async Logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService()

export default authService