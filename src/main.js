const express = require("express");
const app = express();

app.use(express.json());

const cors= require("cors");
app.use(cors());

const { addUser,getUser} = require("./user");

app.get("/1" , async (req,res) => {
    const list = await getUser();
    res.json(list);
});

app.post("/2",async (req, res) => {
    const user = req.body;
    await addUser(user);
    res.json({message : "success"});
});

app.listen(4000, () => console.log("server started"));