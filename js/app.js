console.log("Testing JS");

import { Client, Databases } from "appwrite";

const client = new Client();
const DATABASE_ID = "666f1cbd00250f0ab230";
const COLLECTION_ID_WORDS = "666f1d4300052c82e755";

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("666f110f00375b377aae");

const db = new Databases(client);

async function getWords() {
  const response = await db.listDocuments(DATABASE_ID, COLLECTION_ID_WORDS);
  console.log(response);
}

getWords();
