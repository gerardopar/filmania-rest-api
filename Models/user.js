const mongoose = require('mongoose'); // mongoDB extension
const Schema = mongoose.Schema; // mongoose schema

// * userSchema
const userSchema = new Schema({
    email: { // user__email
        type: String,
        required: true
    },
    password: { // user__email
        type: String,
        required: true
    },
    coins: [ // portfolio__coins
        {
            coinId: { type: Schema.Types.ObjectId }, // coin__coinId
            coinsAvailable: { type: Number, required: false, default: 0 }, // coin__coinsAvailable
            coinsAvailableValue: { type: Number, required: false, default: 0 }, // coin__coinsAvailableValue
            logo: { type: String, required: true }, // coin__coinsAvailable
            name: { type: String, required: true }, // coin__name
            price: { type: Number, required: true }, // coin__name
            percentChange: { type: Number, required: true }, // coin__percentageChange
            symbol: { type: String, required: true } // coin__symbol
        }
        ]
});

// method: updates coins from the DB asynchronously
userSchema.methods.getCoins = function() {
    
    this.coins.forEach((coin) => {
        fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${coin.symbol}`, {
        headers: {
            method: 'GET',
            'X-CMC_PRO_API_KEY': 'beaf807f-da5e-427f-897a-c0381a8a1e49'
        }
        }).then((data) => {
        return data.json(); // returns the first api results
        })
        .then((response) => {
            coin.price = response.data[coin.symbol].quote.USD.price.toFixed(2);
            coin.percentChange = response.data[coin.symbol].quote.USD.percent_change_24h.toFixed(2);
            coin.coinsAvailableValue = response.data[coin.symbol].quote.USD.price.toFixed(2) * coin.coinsAvailable;
            return this.save(); // saves the current coin being updated
    })

    })

};

module.exports = mongoose.model('User', userSchema); // exporting the postSchema model

