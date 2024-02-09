// The web server
import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.use(express.json());

// Connect to MongoDB
let database;
let collection;
async function startup() {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db("capstone");
  collection = database.collection('employee_data');
}
startup();

// Routes
app.all("*", (req, res, next) => {
  console.log(req.url);
  next();
});

//Serve all the people at GET /people
app.post("/api/login", async (req, res) => {
  try {
    const login_data = req.body;
    console.log(login_data);
    let first_name = login_data.first_name;
    let last_name = login_data.last_name;
    const all_people = await collection.find().toArray();
    const login_info = await collection.findOne({'first_name': first_name, 'last_name': last_name});
    let return_data = [login_info, ...(all_people)];
    if (login_info) {
        res.json(return_data);
    } else {
        res.status(401).json({ 'Error': 'Invalid Login' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// app.get("/employee/:i")


app.use("", express.static("frontend/src/index.html"));
app.use("/index.html", express.static("frontend/src/index.html"));
// app.use("/assets", express.static("public/dist/assets"));
// app.use(express.static("public"));

const port = 3503;
app.listen(port, () => console.log(`Listening on port ${port}.`));