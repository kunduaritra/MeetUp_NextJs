import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const { title, image, address, description } = data;

      const client = await MongoClient.connect(
        "mongodb+srv://kunduaritra7:5PEC4YLPKqVS5qkD@cluster0.it4emu0.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted! " });
    } catch (err) {
      res.status(500).json({ message: "Failed to insert data" });
    }
  }
}

export default handler;
