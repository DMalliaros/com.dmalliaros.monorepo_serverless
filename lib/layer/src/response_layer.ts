import moment = require('moment');

export function success(body: any) {
  const time = moment().format('HH:mm:ss');

  return {
    body: JSON.stringify(body),
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "server-time": `${time}`
    }
  };
}
export function failure(error: any) {
  const time = moment().format('HH:mm:ss');

  return {
    body: JSON.stringify(error),
    statusCode: 500,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "server-time": `${time}`
    }
  };
}