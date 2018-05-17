import formatCityName from "../../src/Helpers/formatCityName";
import { expect } from "chai";

describe("formatCityName tests", function() {
    it("should format rio de janeiro,br to Rio de janeiro, BR", function() {
        expect(formatCityName("rio de janeiro,br")).to.equals("Rio de janeiro, BR");
    });
});