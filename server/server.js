const express=require('express');
const app=express();
require('dotenv').config({path:'./config/config.env'});
const PORT=process.env.PORT;
//DB connection
const cors=require('cors');
const corsOptions={ 
    origin:process.env.CLIENT_URL
}
app.use(cors(corsOptions));
const connectDB=require('./config/dataBase');
connectDB()

app.get('/',(req,res)=>{
    res.send('Hello World');
}
);

app.listen(PORT,()=>{
    console.log('Server is running on port 4000');
}
);
