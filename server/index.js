const express = require('express'); 
  
const app = express(); 
const PORT = 3000; 
const mongoose = require('mongoose');
const userRouter= require('./routes/userRouter')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://hermassimyriam:080762@cluster0.fbmsdiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/user',userRouter)

app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 