import OpenWeatherMap from "../../src/Connector/OpenWeatherMap";
import { expect } from 'chai';
import sinon from "sinon";

describe("OpenWeatherMap tests", function() {
    let connectorGetBkp =  OpenWeatherMap.connector.get;

    before(function() {

        OpenWeatherMap.connector.get = sinon.spy();
    });

    after(function() {
        OpenWeatherMap.connector.get = connectorGetBkp;
    });

    it("should call connector", function() {
        OpenWeatherMap.getInfoFromCity("test");

        expect(OpenWeatherMap.connector.get.calledOnce).to.be.true;
    });
});