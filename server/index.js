const express = require('express')
const app = express()

const rewrites = require('./rewrites')
const api = require('./api')

const port = process.env.PORT || 8081

app.use('/', express.static(`${__dirname}/../public/`))

rewrites(app)
api(app)

app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}/`);
})