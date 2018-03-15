const Shopping = require('./../entity/shopping');

let Service = (req, res, next) => {

	let findById = Shopping.findById(req.params.id).exec()
	let remove = Shopping.update({
		_id: req.params.id
	}, {
		$pull: {
			products: req.params.productId
		}
	})

	findById
		.then((shopping) => {

			if ( ! shopping) {
				return res.status(404)
					.json({
						status: false,
						data: {}
					})
			}

			remove
				.exec()
				.then((product) => {

					return res.status(200)
					.json({
						status: true,
						data: product
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