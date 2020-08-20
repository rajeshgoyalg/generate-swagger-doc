
const express = require('express')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const port = 3000

// https://swagger.io/specification/#infoObject
const options = {
	definition: {
		openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
		info: {
			title: 'Hello World', // Title (required)
			version: '1.0.0', // Version (required)
		},
	},
	// Path to the API docs
	apis: ['./app.js'],
};

var swaggerOptions = {
	explorer: true
};

const swaggerDocs = swaggerJsDoc(options);
app.use("/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, swaggerOptions));

// serve swagger
app.get('/swagger.json', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(swaggerDocs);
});

/**
 * @swagger
 *
 * /v1/login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: login
 */
app.post('/v1/login', (req, res) => {
	res.send('login successful!')
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
