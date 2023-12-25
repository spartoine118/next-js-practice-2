import { MongoClient } from "mongodb";

const dbUri = "mongodb://localhost:27017";
const client = new MongoClient(dbUri);

export const connectedDatabase = async () => {
  if (!client) {
    const newClient = new MongoClient(dbUri);
    await newClient.connect();
    console.log("Connected to MongoDb");

    const db = newClient.db("user-reg-antoine");
    return db;
  }
  return client.db("user-reg-antoine");
};

export const disconnectDatabase = async () => {
  if (client) {
    await client.close();
    console.log("disconnected from database");
  }
};
