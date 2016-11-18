/// <reference path="../../../typings/index.d.ts" />
import * as assert from "assert";
import { Calcurator } from "../../app/util/calcurator";

describe("Calcurator", () => {
    describe("#add()", () => {
        it("should correct result", () => {
            assert.equal(3, Calcurator.add(1, 2));
            assert.equal(6, Calcurator.add(1, 2, 3));
            assert.equal(7, Calcurator.add(1, 2, 3, 1));
        });
    });

    describe("#subtract()", () => {
        it("should correct result", () => {
            assert.equal(-1, Calcurator.subtract(1, 2));
            assert.equal(0, Calcurator.subtract(3, 2, 1));
            assert.equal(-5, Calcurator.subtract(1, 2, 3, 1));
        });
    });
});