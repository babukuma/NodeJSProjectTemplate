"use strict";
var http = require("http");
var Log = require("./util/log").Log;
var mymodule = require("./module1/module_sample");
var server = http.createServer();

server.on("request", function (request, response) {
    Log.info("request..");
    Log.debug("request url:" + request.url);

    var m02 = new mymodule.Module02();
    var result = m02.add(1, 2);

    Log.debug("1 + 2 = " + result);

    var m01 = new mymodule.Module01();

    response.write(m01.getHello());
    response.write("\n");
    response.end();

    Log.info("response end");
});
server.listen(8080);
