const multipart = require('parse-multipart')

module.exports = async function (context, req) {
    context.log('Javascript HTTP function Week 2 parse-multipart')

    const boundary = multipart.getBoundary(req.headers['content-type'])
    const body = req.body
    const parts = multipart.Parse(body, boundary)

    let convertedResult = Buffer.from(parts[0].data).toString('base64')

        context.res = {
            body: convertedResult
        }
}
