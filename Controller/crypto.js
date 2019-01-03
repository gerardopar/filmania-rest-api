// * importing modules
const fetch = require('node-fetch');

// * user model
const User = require('../Models/user');

// route: GET /coinList
exports.getCoinList = (req, res, next) => {
    let coinsList = [];
    let coinsL = [];

    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5000', {
        headers: {
            method: 'GET',
            'X-CMC_PRO_API_KEY': 'beaf807f-da5e-427f-897a-c0381a8a1e49'
        }
    }).then((data) => {
        return data.json(); // returns the first api results
    }).then((coins) => {
        let coinsListLength = coins.data.length;
        

        for(let i = 0; i < coinsListLength; i++ ){ // fetching all symbols from the coins data array
            coinsList.push(coins.data[i].symbol);
        }
        
        for(let x = 0; x < coinsListLength; x++) { // creating a new array with objects
            let obj = {name: coinsList[x]};
            coinsL.push(obj);
        }

        res // return the data to the user
            .status(200)
            .json({ 
                message: `Coin List fetched`,
                // coinsList: coinsList
                coinsList: coinsL
                });
    }).catch((err) => {
        console.log(err);
    })
};

// route POST /coinSearched
exports.postCoinSearched = (req, res, next) => {
    const coinSearched = req.body.coinSearched.toUpperCase(); // user search
    const c = { // coin initialized
        name: null,
        symbol: null,
        logo: null,
        price: null,
        percentChange: null
    }
    // 1st api call
    fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${coinSearched}`, {
        headers: {
            method: 'GET',
            'X-CMC_PRO_API_KEY': 'beaf807f-da5e-427f-897a-c0381a8a1e49'
        }
    }).then((data) => {
        return data.json(); // returns the first api results
    }).then((coin) => {
        c.name = coin.data[coinSearched].name; // coin name set
        c.symbol = coin.data[coinSearched].symbol;  // coin symbol set
        c.logo = coin.data[coinSearched].logo; // coin data set

            // 2nd api call
            fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coinSearched}`, {
            headers: {
                method: 'GET',
                'X-CMC_PRO_API_KEY': 'beaf807f-da5e-427f-897a-c0381a8a1e49'
            }
            }).then((data) => {
                return data.json(); // returns the 2nd api results
            })
            .then((coin) => {
                c.price = coin.data[coinSearched].quote.USD.price.toFixed(2); // coin price set
                c.percentChange = coin.data[coinSearched].quote.USD.percent_change_24h.toFixed(2); // coins 24hr percent change set
            })
            .then((result) => {
                res // return the data to the user
                .status(200)
                .json({ 
                    message: `${coinSearched} details fetched`,
                    coinName: c.name,
                    coinSymbol: c.symbol,
                    coinLogo: c.logo,
                    coinPrice: c.price,
                    coinPercentChange: c.percentChange
                });
            })
            .catch((err) => (console.log(err))); // catches the 2nd api errors
    }).catch((err) => {
        console.log(err); // catches the 2st api errors
    })
};



// route GET /globalMarket
exports.getGlobalMarket = (req, res, next) => {
    fetch('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
        headers: {
            method: 'GET',
            'X-CMC_PRO_API_KEY': 'beaf807f-da5e-427f-897a-c0381a8a1e49'
        }
    })
    .then((data) => {
        return data.json(); // returns the 2nd api results
    })
    .then((market) => {
        res // return the data to the user
            .status(200)
            .json({ 
                message: `Cryptocurrency Global Market details fetched`,
                btcDom: market.data.btc_dominance,
                marketCap: market.data.quote.USD.total_market_cap,
                dailyVolume: market.data.quote.USD.total_volume_24h
            });
    })
    .catch((err) => {
        console.log(err);
    });
};

// route: POST /addCoin
exports.addCoin = (req, res, next) => {
    const name = req.body.name;
    const symbol = req.body.symbol;
    const logo = req.body.logo;
    const price =  req.body.price;
    const percentChange =  req.body.percentChange;

    const coin = {
        name: name,
        symbol: symbol,
        logo: logo,
        price: price,
        percentChange: percentChange
    };

    User.findById(req.userId)
        .then((user) => {
            user.coins.push(coin);
            return user.save();
        })
        .then((result) => {
            res
            .status(200)
            .json({ 
                message: `Coin added successfully`,
                coinAdded: coin,
                coins: result.coins
            });
        })
        .catch((err) => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

// route: GET /coins
exports.getCoins = (req, res, next) => {
    let currentUser;

    User.findById(req.userId)
    .then((user) => {
        currentUser = user;
        user.save(() => {
            return currentUser.coins.forEach((coin) => {
                fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coin.symbol}`, {
                headers: {
                    'X-CMC_PRO_API_KEY': 'beaf807f-da5e-427f-897a-c0381a8a1e49'
                }
                }).then((data) => {
                    return data.json(); // returns the first api results
                })
                .then((response) => {
                    coin.price = response.data[coin.symbol].quote.USD.price.toFixed(2);
                    coin.percentChange = response.data[coin.symbol].quote.USD.percent_change_24h.toFixed(2);
                    coin.coinsAvailableValue = response.data[coin.symbol].quote.USD.price.toFixed(2) * coin.coinsAvailable;
                    return user.save();
                })
                .catch((err) => console.log(err));
        });
        })
        return currentUser.coins;
    })
    .then((data) => {
        res
        .status(200)
        .json({ 
            message: `User Coins fetched`,
            coins: data
        });
    })
    .catch((err) => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });


}

// route: DELETE /removeCoin
exports.removeCoin = (req, res, next) => {
    const coinId = req.body.id;
    let coins;

    User.findById(req.userId)
        .then((user) => {
            coins = user.coins.filter((coin) => (coin.id.toString() !== coinId.toString()));
            user.coins = coins;
            return user.save();
        })
        .then((result) => {
            res
            .status(201)
            .json({ // send the data to the client after saving the post to the DB
                message: 'Todo removed successfully',
                coins: result.coins
            });
        })
        .catch((err) => { // catch any errors
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

// route: POST /coinsToAdd
exports.coinsToAdd = (req, res, next) => {
    const coinId = req.body.id;
    const coinsToAdd = req.body.coinsToAdd;
    let coinToUpdate;

    User.findById(req.userId)
        .then((user) => {
            coinToUpdate = user.coins.find((coin) => coin._id.toString() === coinId.toString() );
            coinToUpdate.coinsAvailable += Number(coinsToAdd);
            coinToUpdate.coinsAvailableValue = coinToUpdate.price * coinToUpdate.coinsAvailable;
            return user.save()
        }).then((result) => {
            res
            .status(201)
            .json({ // send the data to the client after saving the post to the DB
                message: 'Coins added successfully',
                coins: result.coins
            });
        })
        .catch((err) => { // catch any errors
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

// route: POST /coinsToAdd
exports.coinsToRemove = (req, res, next) => {
    const coinId = req.body.id;
    const coinsToRemove = req.body.coinsToRemove;
    let coinToUpdate;

    User.findById(req.userId)
        .then((user) => {
            coinToUpdate = user.coins.find((coin) => coin._id.toString() === coinId.toString() );
            coinToUpdate.coinsAvailable -= Number(coinsToRemove);
            coinToUpdate.coinsAvailableValue = coinToUpdate.price * coinToUpdate.coinsAvailable;
            return user.save()
        }).then((result) => {
            res
            .status(201)
            .json({ // send the data to the client after saving the post to the DB
                message: 'Coins removed successfully',
                coins: result.coins
            });
        })
        .catch((err) => { // catch any errors
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

// route: POST /clearCoins
exports.clearCoins = (req, res, next) => {
    const coinId = req.body.id;
    let coinToUpdate;

    User.findById(req.userId)
        .then((user) => {
            coinToUpdate = user.coins.find((coin) => coin._id.toString() === coinId.toString() );
            coinToUpdate.coinsAvailable = 0;
            coinToUpdate.coinsAvailableValue = 0;
            return user.save()
        }).then((result) => {
            res
            .status(201)
            .json({ // send the data to the client after saving the post to the DB
                message: 'Coin cleared successfully',
                coins: result.coins
            });
        })
        .catch((err) => { // catch any errors
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

// route GET /summary 
exports.getSummary = (req, res, next) => {
    let summary = 0; // portfolio summary inital state

    User.findById(req.userId)
        .then((user) => {
            user.coins.forEach((coin) => { // update the portfolio summary
                summary += coin.coinsAvailableValue;
            });
        })
        .then((data) => {
            res
            .status(200)
            .json({ 
                message: 'Portfolio summary fetched',
                summary: summary
            });
        })
        .catch((err) => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};