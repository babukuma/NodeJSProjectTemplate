/// <reference path="../../../typings/index.d.ts" />
import * as assert from "assert";
import { Log } from "../../app/util/log";

describe("Log", () => {
    describe("#debug()", () => {
        it("shouldn't throw error", () => {
            try {
                Log.debug("test");
            } catch (e) {
                assert.ok(false, e);
            }
        });
    });

    describe("#info()", () => {
        it("shouldn't throw error", () => {
            try {
                Log.info("test");
            } catch (e) {
                assert.ok(false, e);
            }
        });
    });

    describe("#error()", () => {
        it("shouldn't throw error", () => {
            try {
                Log.error("test");
            } catch (e) {
                assert.ok(false, e);
            }
        });
    });
});