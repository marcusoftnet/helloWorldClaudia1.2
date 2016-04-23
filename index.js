/* global require, module */
var ApiBuilder = require("claudia-api-builder");
var api = new ApiBuilder();

api.get("/hello/{name}", function (request) {
    return `Hello World! Haaaaave you met ${request.pathParams.name}?`;
});

module.exports = api;