const mongoose = require('mongoose')

let Products = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Products', Products)