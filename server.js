const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = "company_db";
const collectionName = "employees";

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', async function (req, res) {
    let response = {};

    //connect to database
    await client.connect();
    console.log("Connected successfully to server")

    //initiates or get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    //get data from database
    const data = await collection.findOne({ id: 1 });
    console.log(data);
    client.close();

    if (data) {
        response = {
            name: data.name,
            email: data.email,
            interests: data.interests
        }
    }
    res.send(response);
})

app.post('/update-profile', async function (req, res) {
    const payload = req.body;
    console.log(payload);


    if (Object.keys(payload).length === 0) {
        res.status(400).send({ error: "Empty payload. Couldn't update user profile data." })
    } else {
        //connect to database
        await client.connect();
        console.log("Connected successfully to server");

        //initiates or get database and collection
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        //saving data
        payload['id'] = 1;
        const updatedValues = { $set: payload };
        await collection.updateOne({ id: 1 }, updatedValues, { upsert: true });
        client.close();
        res.status(200).send({ info: "user profile data updated successfully" });

    }
})

app.listen(3000, function () {
    console.log("app listening on port 3000")
})