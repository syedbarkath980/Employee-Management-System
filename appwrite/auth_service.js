import { Client, Account } from 'appwrite';
import conf from '../conf/conf';

const client = new Client();

client
    .setEndpoint(conf.appwriteURL)
    .setProject(conf.appwriteProjectId);

export const account = new Account(client);


export const login = async (email, password) => {
    return await account.createEmailPasswordSession(email, password);
}

export const logout = async () => {
    return await account.deleteSession('current');
};


export const getCurrentUser = async () => {
    return await account.get();
}
