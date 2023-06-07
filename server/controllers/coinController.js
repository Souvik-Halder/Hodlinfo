
const Coin=require('../models/Coin');

const getCoins=async(req,res)=>{
    try {
        const coins=await Coin.find();
        res.status(200).json(coins);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
module.exports={getCoins};