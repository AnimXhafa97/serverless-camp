const fetch = require('node-fetch')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

            const response = await fetch('https://bit-cat.azurewebsites.net/cat/says/serverless', {
                method: 'GET'
            });
            const cat = await response.arrayBuffer()
            const base64cat = Buffer.from(cat).toString('base64') //encode the cat pic to base64

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { base64cat }
    };
}


