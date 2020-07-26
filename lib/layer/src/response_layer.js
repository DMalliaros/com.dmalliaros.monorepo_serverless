let response = {};
response.success = (body) => {
    return {
        body: JSON.stringify(body),
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
    }
};
response.failure = (error) => {
    return {
        body: JSON.stringify(error),
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
    }
};
module.exports = response;