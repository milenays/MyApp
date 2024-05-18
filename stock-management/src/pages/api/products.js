import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // MongoDB'nin kurulu olduğu yerel bağlantı dizesi
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
