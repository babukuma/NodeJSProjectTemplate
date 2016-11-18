"use strict";
var Calcurator = require("../util/calcurator").Calcurator;

// Module01
var Module01 = (function () {
    function Module01() {
    }
    Module01.prototype.getHello = function () {
        return "Hello";
    };
    return Module01;
} ());
exports.Module01 = Module01;

// Module02
var Module02 = (function () {
    function Module02() {
    }
    Module02.prototype.add = function (x, y) {
        return Calcurator.add(x, y);
    };
    return Module02;
} ());
exports.Module02 = Module02;
