const fs = require('fs')
const fm = require('front-matter')

const glob = require("glob")

const remark = require('remark')
const recommended = require('remark-preset-lint-recommended')
const html = require('remark-html')
const report = require('vfile-reporter')


async function main() {

    glob('./src/pages/**/*.md', { strict: true }, function (er, files) {

        files.forEach((file) => {


            fs.readFile(file, 'utf8', function (err, data) {
                console.log(`processing ${file}`)

                if (err) throw err

                const  content = fm(data)

                remark()
                    .use(recommended)
                    .use(html)
                    .process(content.body, function(err, file) {
                        console.error(report(err || file))
                        // console.log(String(file))
                    })

                // const  content = fm(data)

                // console.log(content)
            })
        })


    })


}

main()