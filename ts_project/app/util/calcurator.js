"use strict";
var Calcurator = (function () {
    function Calcurator() {
    }
    Calcurator.add = function (x) {
        var n = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            n[_i - 1] = arguments[_i];
        }
        var total = x;
        for (var i = 0; i < n.length; i++) {
            total += n[i];
        }
        return total;
    };
    Calcurator.subtract = function (x) {
        var n = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            n[_i - 1] = arguments[_i];
        }
        var total = x;
        for (var i = 0; i < n.length; i++) {
            total -= n[i];
        }
        return total;
    };
    return Calcurator;
}());
exports.Calcurator = Calcurator;
