module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let responseMessage
    //const name = (req.query.name || (req.body && req.body.name));
    const password = req.query.password
    if (password == "letmein") {
        responseMessage = 'Access granted.'
    } else {
        responseMessage = 'Access denied.'
    }

    //const responseMessage = name
    // const responseMessage = password
    //     ? "Hello, " + password + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}