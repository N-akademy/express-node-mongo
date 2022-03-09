const express = require("express");
const mongoose = require("mongoose");
const wilderController = require("./controllers/Wilders");
const app = express();

// database
async function init(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wilderdb",
        { autoIndex: true }) 
    
    app.get("/", (req, res) => {
        res.json({message:"Hello World"});
    });

app.use(express.json());
//routes
app.post("/api/wilders", wilderController.create);

app.get("/api/wilders/", wilderController.read);

app.put("/api/wilder/:id", wilderController.update);

app.delete("/api/wilder/:id", wilderController.delete);

app.use((req,res,next =>{
    res.status(400).json({ message: 'Route not found !' })
}))

//Start Server
app.listen(3000, () => console.log("Server started on 3000"));
}
init();