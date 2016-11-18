"use strict";
var calcurator_1 = require("../util/calcurator");
var DefaultModule01 = (function () {
    function DefaultModule01() {
    }
    DefaultModule01.prototype.getHello = function () {
        return "Hello";
    };
    return DefaultModule01;
}());
exports.__esModule = true;
exports["default"] = DefaultModule01;
var Module02 = (function () {
    function Module02() {
    }
    Module02.prototype.add = function (x, y) {
        return calcurator_1.Calcurator.add(x, y);
    };
    return Module02;
}());
exports.Module02 = Module02;
