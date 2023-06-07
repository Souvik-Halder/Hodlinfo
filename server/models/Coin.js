const mongoose=require('mongoose');
const CoinSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    last:{
        type:String,
    }, 
    buy:{
        type:String,
    }, 
    sell:{
        type:String,
    }, 
    volume:{
        type:String,
    }, 
    base_unit:{
        type:String,
    }, 
})
module.exports=mongoose.model('Coin',CoinSchema);
