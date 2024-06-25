const sdk = new Appwrite();

sdk
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
  .setProject("6670ae480006e5973d69"); // Your project ID

window.getWords = async function () {
  const response = await sdk.database.listDocuments(
    DATABASE_ID,
    COLLECTION_ID_WORDS
  );
  console.log(response);
};

//Need     DATABASE_ID, COLLECTION_ID_WORDS?
