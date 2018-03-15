let Shopping = require('./../entity/shopping')

const Service = (req, res, next) => {

	let products = new Shopping(req.body)

	products
		.save()
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
}

module.exports = Service