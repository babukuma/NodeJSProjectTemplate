/// <reference path="../../typings/index.d.ts" />
import * as http from "http";

import { Log } from "./util/log";
import { default as Module01, Module02 } from "./module1/module_sample";

let server = http.createServer();
server.on("request", function (request: http.IncomingMessage, response: http.ServerResponse) {
    Log.info("request..");
    Log.debug("request url:" + request.url);

    // use Module02
    let m02 = new Module02();
    let result = m02.add(1, 2);
    Log.debug("1 + 2 = " + result);

    // use Module01
    let m01 = new Module01();

    response.write(m01.getHello());
    response.write("\n");
    response.end();

    Log.info("response end");
});
server.listen(8080);
