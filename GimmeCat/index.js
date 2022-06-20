const fetch = require('node-fetch')



module.exports = async function (context, req) {
    var names_list = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"]
    context.log('JavaScript HTTP trigger function processed a request.');

            const response = await fetch('https://bit-cat.azurewebsites.net/cat/says/serverless', {
                method: 'GET'
            });
            const cat = await response.arrayBuffer()
            const base64cat = Buffer.from(cat).toString('base64') //encode the cat pic to base64

            function getNames() {
                const rand = Math.floor((Math.random()*names_list.length))
                const get_name = names_list[rand]
                return get_name
            }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            names: [getNames(), getNames()], 
            cat1: base64cat,
            cat2: base64cat,

        
        },
    };
}


