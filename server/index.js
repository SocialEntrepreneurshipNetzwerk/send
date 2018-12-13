const express = require('express')
const app = express()

const rewrites = require('./rewrites')
const api = require('./api')

const port = process.env.PORT || 8081


const fixEncoding = (req, res, next) => {
  console.log(req.url)
  // rewrite odd umlaut encodings to the standard
  req.url = req.url.replace(/%C3%B6/g,'o%CC%88') // ö
  // req.url = decodeURIComponent(req.url)
  console.log(req.url)
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