const multipart = require('parse-multipart')
const fetch = require('node-fetch')

async function analyzeImage(img) {
    //const subscriptionKey = process.env.SUBSCRIPTIONKEY
    const subscriptionKey = '2b46dc89f4624d6ba01b0b629dd94ad0'

    //const uriBase = process.env.ENDPOINT + '/face/v1.0/detect'
    const uriBase = 'https://placeholdeer-face-api.cognitiveservices.azure.com' + '/face/v1.0/detect'

    let params = new URLSearchParams({
        'returnFaceId': true,
        'returnFaceAttributes': 'emotion'
    })

    let resp = await fetch(uriBase + '?' + params.toString(), {
        method: 'POST',
        body: img,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    })

    let data = await resp.json()
    return data

}

module.exports = async function (context, req) {
    context.log('Javascript HTTP function Week 2 parse-multipart')

    const boundary = multipart.getBoundary(req.headers['content-type'])
    const body = req.body
    const parts = multipart.Parse(body, boundary)

    const result = await analyzeImage(parts[0].data)

    context.res = {
        body: {
            result
        }
    }

    console.log(result)
    context.done
}
