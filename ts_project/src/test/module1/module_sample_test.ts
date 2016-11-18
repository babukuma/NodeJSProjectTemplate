/// <reference path="../../../typings/index.d.ts" />
import * as assert from "assert";
import { default as Module01, Module02 } from "../../app/module1/module_sample";

describe("Module02", () => {
    describe("#add()", () => {
        it("should correct result", () => {
            let m02 = new Module02();
            assert.equal(3, m02.add(1, 2));
            assert.equal(4, m02.add(2, 2));
        });
    });
});