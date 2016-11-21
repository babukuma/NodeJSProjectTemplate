"use strict";
var assert = require("assert");
var Calcurator = require("../../app/util/calcurator").Calcurator;
describe("Calcurator", function () {
    describe("#add()", function () {
        it("should correct result", function () {
            assert.equal(3, Calcurator.add(1, 2));
            assert.equal(6, Calcurator.add(1, 2, 3));
            assert.equal(7, Calcurator.add(1, 2, 3, 1));
        });
    });
    describe("#subtract()", function () {
        it("should correct result", function () {
            assert.equal(-1, Calcurator.subtract(1, 2));
            assert.equal(0, Calcurator.subtract(3, 2, 1));
            assert.equal(-5, Calcurator.subtract(1, 2, 3, 1));
        });
    });
});
