let Product = require('./../entity/products')

const Service = (req, res, next) => {
	
	let findById = Product.findById(req.params.id).exec()
	let update = Product.update({
		_id: req.params.id
	}, {
		$set: req.body
	}, {multi: false}).exec()

	findById
		.then((product) => {
			update
				.then((result) => {

					if ( ! result) {
						return res.status(400)
							.json({
								status: false,
								data: {}
							})
					}

					return res.status(200)
						.json({
							status: true,
							data: result
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
		.catch((err) => {
			return res.status(500)
				.json({
					status: false,
					data: {}
				})
		})
}

module.exports = Service