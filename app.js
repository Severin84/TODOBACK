const express = require('express');
const tasks=require('./routes/task')
const mongoose = require('mongoose');
const app=express();
const connectDB=require('./Db/connect.js')
require('dotenv').config();

//middleware 
app.use(express.static('./public'))
app.use(express.json());



const port=3000;

// const start =async ()=>{
//     try{
//         await  mongoose.connect("mongodb://0.0.0.0:27017",{
//         dbName:"Shop",
//         useUnifiedTopology:true,
//         useNewUrlParser: true,
//          useCreateIndex:true,
//         }).then(()=>console.log("DataBase Connected")).catch((e)=>console.log(e))
//     } catch (error){
//         console.log(error)
//     }
// }
// app.get('/hello',(req,res)=>{
//     res.send("TASK MANAGER")
// })

app.use('/api/v1/tasks',tasks);


const start=async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening at ${port}..`));
    }catch(error){
        console.log(error);
    }
}

start();
