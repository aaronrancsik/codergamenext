import {Client, Account, Databases} from 'appwrite'
import { Axios } from 'axios';

export const client = new Client();

client
    .setEndpoint(process.env.APPWRITE_ENDPOINT as string) // Your API Endpoint
    .setProject(process.env.APPWRITE_PROJECT_ID as string) // Your project ID;

export const account = new Account(client);

// database
export const databases = new Databases(client, process.env.APPWRITE_DATABASE_ID as string);


export const create = (inputValue:string[]) => {
    const promise = databases.createDocument(process.env.APPWRITE_DATABASE_ID as string, process.env.APPWRITE_COLLECTION_ID as string, 'unique()', inputValue);
    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
};

