"use strict";
var assert = require("assert");
var log_1 = require("../../app/util/log");
describe("Log", function () {
    describe("#debug()", function () {
        it("shouldn't throw error", function () {
            try {
                log_1.Log.debug("test");
            }
            catch (e) {
                assert.ok(false, e);
            }
        });
    });
    describe("#info()", function () {
        it("shouldn't throw error", function () {
            try {
                log_1.Log.info("test");
            }
            catch (e) {
                assert.ok(false, e);
            }
        });
    });
    describe("#error()", function () {
        it("shouldn't throw error", function () {
            try {
                log_1.Log.error("test");
            }
            catch (e) {
                assert.ok(false, e);
            }
        });
    });
});
