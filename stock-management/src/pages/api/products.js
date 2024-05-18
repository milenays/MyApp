import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('stockie'); // Veritabanı adı

  switch (req.method) {
    case 'POST':
      const bodyObject = JSON.parse(req.body);
      const newProduct = await db.collection('products').insertOne(bodyObject);
      res.json(newProduct.ops[0]);
      break;
    case 'GET':
      const products = await db.collection('products').find({}).toArray();
      res.json(products);
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
