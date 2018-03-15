let Product = require('./../entity/products')

const Service = (req, res, next) => {
	
	let findById = Product.findById(req.params.id).exec()
	let remove = Product.remove({
		_id: req.params.id
	})

	findById
		.then((product) => {
			
			if ( ! product) {
				return res.status(404)
				.json({
					status: false,
					data: {
						_id: req.params._id
					}
				})
			}

			remove
				.exec()
				.then(() => {
					return res.status(200)
						.json({
							status: true,
							data: product
						})
				}) 
				.catch(() => {
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