// * importing modules
const express = require('express'); // express framework

// * express router middleware
const router = express.Router();

// * controller
const cryptoController = require('../Controller/crypto');

// * auth middleware
const isAuth = require('../middleware/is-auth');

// route: POST /coinSearched
router.post('/coinSearched', cryptoController.postCoinSearched);

// route: GET /globalMarket
router.get('/globalMarket', cryptoController.getGlobalMarket);

// route: POST /addCoin
router.post('/addCoin', isAuth, cryptoController.addCoin);

// route: GET /coins
router.get('/coins', isAuth, cryptoController.getCoins);

// route: DELETE /removeCoin
router.delete('/removeCoin', isAuth, cryptoController.removeCoin);

// route: POST /coinsToAdd
router.post('/coinsToAdd', isAuth, cryptoController.coinsToAdd);

// route: POST /coinsToRemove
router.post('/coinsToRemove', isAuth, cryptoController.coinsToRemove);

// route: POST /clearCoins
router.post('/clearCoins', isAuth, cryptoController.clearCoins);

// route GET /summary 
router.get('/summary', isAuth, cryptoController.getSummary);

// router.post('/coinUpdates', isAuth, cryptoController.getUpdates);

// ! exporting the router
module.exports = router;