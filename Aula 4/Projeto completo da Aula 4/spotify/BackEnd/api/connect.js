import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://otavio2005discini:rdgVP87OxQ32ffIf@cluster0.skd5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);


  // Conectar ao MongoDB
  await client.connect();
  console.log("Conectado ao MongoDB!");

  // Acessar o banco de dados
 export const db = client.db("spotify");
//   const songCollection = await db.collection("songs").find({}).toArray();

//   console.log(songCollection);

// Executar a função
