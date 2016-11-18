"use strict";
var assert = require("assert");
var module_sample_1 = require("../../app/module1/module_sample");
describe("Module02", function () {
    describe("#add()", function () {
        it("should correct result", function () {
            var m02 = new module_sample_1.Module02();
            assert.equal(3, m02.add(1, 2));
            assert.equal(4, m02.add(2, 2));
        });
    });
});
