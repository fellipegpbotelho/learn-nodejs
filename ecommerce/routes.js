module.exports = (app) => {
	app.use('/products', require('./products'))
	app.use('/shopping', require('./shopping'))
	app.use('/purchase', require('./purchase'))
}