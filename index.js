const express = require("express");
const app = express();
const bodyParser = require ("body-parser")
const cors = require("cors");
var mongodb = require('mongodb');
const url ="mongodb+srv://admin123:admin123@cluster0.w2u8k.mongodb.net/booh_show?retryWrites=true&w=majority";
console.log(url);
app.use(bodyParser.json());  
app.use(cors());

app.get("/events",async (req,res) => {
    try {
        let client = await mongodb.connect(url,{ useUnifiedTopology: true });
        let db = client.db("booh_show")
        let data = await db.collection("booked_show_details").find().toArray();
        client.close();
        res.json(data);
        console.log(data);
    }catch(error) {
        res.status(500).json({
           message: "Something went wrong!",
        })
    }
})

app.put("/eventss",async (req,res) => {
    try {
        let client = await mongodb.connect(url,{ useUnifiedTopology: true });
        let db = client.db("booh_show")
        let data = await db.collection("booked_show_details").find().toArray();
        client.close();
        res.json(data);
        console.log(data);
    }catch(error) {
        res.status(500).json({
           message: "Something went wrong!",
        })
    }
})

app.post("/event", async (req,res) => {
    try{
        let client = await mongodb.connect(url,{ useUnifiedTopology: true });
        let db = await client.db("booh_show")
        let data=await db.collection("booked_show_details").insertOne(req.body);
        console.log(req.body);
        client.close()
           
        res.json({
            message:"success",
        })
    

    }
    catch (error){
        console.log(error)
    }
})

app.listen(process.env.PORT || 4050, function (req,res) {
    console.log("Server Listening");
})