let Product = require('./../entity/products')

const Service = (req, res, next) => {
	let product = new Product(req.body)
	product
		.save()
		.then((product) => {
			if ( ! product) {
				return res.status(404)
					.json({
						status: false,
						data: {}
					})
			}
			return res.status(200)
					.json({
						status: true,
						data: product
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