"use strict";
var assert = require("assert");
var calcurator_1 = require("../../app/util/calcurator");
describe("Calcurator", function () {
    describe("#add()", function () {
        it("should correct result", function () {
            assert.equal(3, calcurator_1.Calcurator.add(1, 2));
            assert.equal(6, calcurator_1.Calcurator.add(1, 2, 3));
            assert.equal(7, calcurator_1.Calcurator.add(1, 2, 3, 1));
        });
    });
    describe("#subtract()", function () {
        it("should correct result", function () {
            assert.equal(-1, calcurator_1.Calcurator.subtract(1, 2));
            assert.equal(0, calcurator_1.Calcurator.subtract(3, 2, 1));
            assert.equal(-5, calcurator_1.Calcurator.subtract(1, 2, 3, 1));
        });
    });
});
