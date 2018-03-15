let Shopping = require('./../entity/shopping')

const Service = (req, res, next) => {

	let find = Shopping.find({}).exec()

	find
		.then((products) => {

			if ( ! products) {
				return res.status(404)
					.json({
						status: false,
						data: {}
					})
			}

			return res.status(200)
				.json({
					status: true,
					data: products
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