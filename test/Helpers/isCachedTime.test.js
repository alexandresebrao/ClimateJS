import isCachedTime from "../../src/Helpers/isCachedTime";
import { expect } from "chai";

describe("isCachedTime tests", function() {
    it("should return true when the cache is valid", function() {
       expect(isCachedTime(60 * 1000, 3 * 60 * 1000)).to.be.true;
    });

    it("should return false when the cache is no more valid", function() {
        expect(isCachedTime(60 * 1000, 15 * 60 * 1000)).to.be.false;
    });
});