const express = require('express')
const app = express()

const rewrites = require('./rewrites')
const api = require('./api')

const port = process.env.PORT || 8081


const fixEncoding = (req, res, next) => {
  req.url = req.url.replace(/%C3%B6/g,'%CC%88')
  return next()
}

app.use(fixEncoding)

app.use('/', express.static(`${__dirname}/../public/`, {
    fallthrough: true,
    redirect: true
}))

rewrites(app)
api(app)

app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}/`);
})