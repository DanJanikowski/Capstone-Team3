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

// Get a single persons info by NAME
app.post('/api/getlogin', async (req, res) => {
  try {
    const login_data = req.body;
    let first_name = login_data.first_name;
    let last_name = login_data.last_name;
    const login_info = await collection.findOne({ 'first_name': first_name, 'last_name': last_name });
    if (login_info) {
      res.json(login_info);
    } else {
      res.status(401).json({ 'Error': 'Invalid Login' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Get like 20 people slice(i * 20, 20)
app.post('/api/getpeople/:i', async (req, res) => {
  try {
    const data = req.body;
    let user_fn = data.user_fn;
    let user_ln = data.user_ln;
    const userInfo = await collection.findOne({ 'first_name': user_fn, 'last_name': user_ln });
    let numToGet = 20;
    let toSkip = parseInt(req.params['i']) * numToGet;
    const people = await collection.find().skip(toSkip).limit(numToGet).toArray();

    if (userInfo.role === 'basic') {
      people.forEach(person => {
        if (person.id !== userInfo.id) person.salary = 0;
      });
    }
    else if (userInfo.role === 'manager') {
      people.forEach(person => {
        if (person.manager_id !== userInfo.id) person.salary = 0;
      });
    }

    res.json(people);
  } catch (error) {
    res.status(500).json({ error: error });
  }
})

// Get a single persons info by ID
app.get("/api/employee/:id", async (req, res) => {
  try {
    const employee = await collection.findOne({ id: parseInt(req.params['id']) });
    console.log(employee);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Get Searched people
app.post("/api/search_request", async (req, res) => {
  try {
    const data = req.body;

    let user_fn = data.user_fn;
    let user_ln = data.user_ln;
    const userInfo = await collection.findOne({ 'first_name': user_fn, 'last_name': user_ln });

    let search_fn = data.search_fn;
    let search_ln = data.search_ln;
    let results = [];
    if (search_ln.length === 0) {
      results = await collection.find({ 'first_name': search_fn }).toArray();
    }
    else {
      results = await collection.find({ 'first_name': search_fn, 'last_name': search_ln }).toArray();
    }
    if (results.length === 0) {
      res.json(results);
      return;
    }

    if (userInfo.role === 'basic') {
      results.forEach(person => {
        if (person.id !== userInfo.id) person.salary = 0;
      });
    } else if (userInfo.role === 'manager') {
      results.forEach(person => {
        if (person.manager_id !== userInfo.id) person.salary = 0;
      });
    }
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});



app.use("", express.static("frontend/src/index.html"));
app.use("/index.html", express.static("frontend/src/index.html"));

const port = 3503;
app.listen(port, () => console.log(`Listening on port ${port}.`));