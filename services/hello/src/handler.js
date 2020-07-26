const responseLayer = require('/opt/response_layer');

exports.hello = function(event, context, callback) {
	const myResponse = responseLayer.success({"monorepo":"serverless"});

  callback(null, myResponse);
};