"use strict";
var Log = (function () {
    function Log() {
    }
    Log.debug = function (msg) {
        console.log("[DEBUG]", msg);
    };
    Log.info = function (msg) {
        console.log("[INFO]", msg);
    };
    Log.error = function (msg) {
        console.error("[ERROR]", msg);
    };
    return Log;
}());
exports.Log = Log;
