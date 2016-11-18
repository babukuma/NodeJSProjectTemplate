"use strict";
var http = require("http");
var log_1 = require("./util/log");
var module_sample_1 = require("./module1/module_sample");
var server = http.createServer();
server.on("request", function (request, response) {
    log_1.Log.info("request..");
    log_1.Log.debug("request url:" + request.url);
    var m02 = new module_sample_1.Module02();
    var result = m02.add(1, 2);
    log_1.Log.debug("1 + 2 = " + result);
    var m01 = new module_sample_1["default"]();
    response.write(m01.getHello());
    response.write("\n");
    response.end();
    log_1.Log.info("response end");
});
server.listen(8080);
