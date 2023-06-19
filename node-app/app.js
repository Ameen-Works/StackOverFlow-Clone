const express= require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const mongoose= require("mongoose");
const doubtRoute=require("./routes/doubts");
const app= express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Ameen-Works:Bismi786123@cluster0.dv9s3bj.mongodb.net/?retryWrites=true&w=majority")

const con= mongoose.connection;
try {
    con.on("open",()=>{
        console.log("MongoDB Connected");
    });
} catch (error) {
    console.log(error);
}
app.use("/doubts",doubtRoute);

app.get("/",(req,res)=>{
    res.send("GetMethod");
});

app.listen(4010);