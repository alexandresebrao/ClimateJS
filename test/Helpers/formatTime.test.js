import formatTime from "../../src/Helpers/formatTime";
import { expect } from "chai";

describe("formatTime tests", function() {
    it("should return 07:51:12 PM for 19:51:12 in timestamp", function() {
        expect(formatTime(1526597472802)).to.equal("07:51:12 PM");
    });

    it("should return 04:12:34 AM for 04:12:34 in timestamp", function() {
        expect(formatTime(1549174354000)).to.equal("04:12:34 AM");
    });

    it("should return 00:00:00 AM for 00:00:00 in timestamp", function() {
        expect(formatTime(1549159200000)).to.equal("00:00:00 AM");
    });

    it("should return 12:31:12 PM for 12:31:12", function() {
        expect(formatTime(1526657472324)).to.equal("12:31:12 PM");
    });

});