const express = require('express')
const app = express()

const rewrites = require('./rewrites')
const api = require('./api')

const port = process.env.PORT || 8081






const fixEncoding = (req, res, next) => {
  console.log(req.url)
    const from = /2018-12-12_erster-deutscher-social-entrepreneurship-monitor-ver%C3%B6ffentlicht/g
    const to = '2018-12-12_erster-deutscher-social-entrepreneurship-monitor-vero%CC%88ffentlicht'
  // rewrite odd umlaut encodings to the standard
    if (req.url.match(from)) {
        return res.redirect(301,req.url.replace(from, to)) // ö
    }
  // req.url = decodeURIComponent(req.url)
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
