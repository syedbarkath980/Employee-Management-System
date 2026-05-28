import { Client, Databases, Query, ID } from 'appwrite';
import conf from '../conf/conf';

const client = new Client();

client
    .setEndpoint(conf.appwriteURL)
    .setProject(conf.appwriteProjectId);

export const databases = new Databases(client)

const getAllEmployees = async () => {
    return await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteTableId,
        [Query.equal('role', 'employee')]
    )
}

const createTask = async (title, description, assignedto, category) => {
    return await databases.createDocument(conf.appwriteDatabaseId, conf.appwriteTaskId, ID.unique(), { title, category, description, assignedto, status: "pending" })
}

const getEmployeeTasks = async (userId) => {
    return await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteTaskId,
        [Query.equal('assignedto', userId)]
    )
}

const updateTaskStatus = async (taskId, status) => {
    return await databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteTaskId, taskId, { status })
}

const createUser = async (name, email, userId) => {
    return await databases.createDocument(conf.appwriteDatabaseId, conf.appwriteTableId, ID.unique(), { name, email, userId, role: "employee" })
}

export { getAllEmployees, createTask, getEmployeeTasks, updateTaskStatus, createUser }