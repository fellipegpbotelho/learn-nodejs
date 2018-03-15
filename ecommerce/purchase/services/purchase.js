let Purchase = require('./../entity/purchase')
let Shopping = require('./../../shopping/entity/shopping')

const Service = (req, res, next) => {
	
	let purchase = new Purchase(req.body)
	purchase.shopping = req.params.shoppingId

	Shopping
		.findById(req.params.shoppingId)
		.populate('products')
		.exec()
		.then((shopping) => {
			if ( ! shopping) {
				return res.status(404)
				.json({
					status: false,
					data: {}
				})
			}

			let total = 0

			shopping.products.forEach((value, key) => {
				if ((shopping.products.length - 1) !== key) {
					total = total + value.price
				}
				if (shopping.products.length === 1) {
					total = shopping.products[key].price
				}
				console.log(total);
				purchase.total = total
				purchase
					.save()
					.then((saved) => {
						return res.status(200)
							.json({
								status: true,
								data: saved
							})
					})
					.catch((err) => {
						return res.status(500)
							.json({
								status: false,
								data: {}
							})
					})
			})
		})
		.catch((err) => {
			return res.status(500)
				.json({
					status: false,
					data: {}
				})
		})
}

module.exports = Service