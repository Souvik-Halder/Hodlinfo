const { getCoins } = require('../controllers/coinController');
const router=require('express').Router()

router.route('/getCoins').get(getCoins)

module.exports=router;