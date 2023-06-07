const express=require('express');
const cors=require('cors');
const app=express();
const axios=require('axios');
require('dotenv').config({path:'./config/config.env'});
const PORT=process.env.PORT;
//DB connection
const corsoptions={
    origin:process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus:200
}

app.use(cors(corsoptions));
;
const connectDB=require('./config/dataBase');
const Coin = require('./models/Coin');
connectDB()


app.use(express.json());
app.use('/api',require('./routes/coinRoutes'));
 
const fetchData=async()=>{
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const data = response.data;
    const entries = Object.entries(data);
    const firstTenEntries = entries.slice(0, 10);
   const coins=await Coin.find();
   
   if(coins.length===10){
         return;
    }
   for(let i=0;i<firstTenEntries.length;i++){
    
         const coin=new Coin({
              name:firstTenEntries[i][1].name,
              last:firstTenEntries[i][1].last,
              buy:firstTenEntries[i][1].buy,
              sell:firstTenEntries[i][1].sell,
              volume:firstTenEntries[i][1].volume,
              base_unit:firstTenEntries[i][1].base_unit,
         });
         await coin.save();
    }
}
fetchData();    

app.get('/',(req,res)=>{
    res.send('Hello World');
}
);

app.listen(PORT,()=>{
    console.log('Server is running on port 4000');
}
);
