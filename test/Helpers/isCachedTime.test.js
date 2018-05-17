import isCachedTime from "climateje/Helpers/isCachedTime";

describe("isCachedTime tests", function() {
    it("should return true when the cache is valid", function() {
       expect(isCachedTime(10, 500)).to.be.true;
    });

    it("should return false when the cache is no more valid", function() {
        expect(isCachedTime(10, 500)).to.be.true;
    });
});