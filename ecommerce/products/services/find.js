let Product = require('./../entity/products')

const Service = (req, res) => {
	
	let find = {};

	if (req.params.id) {
		find = Product.findById(req.params.id).exec()
	}

	if ( ! req.params.id) {
		find = Product.find({}).exec()
	}

	find
		.then((result) => {

			if ( ! result) {
				return res.status(404)
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
}

module.exports = Service