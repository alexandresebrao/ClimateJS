import WeatherController from "../../src/Connector/WeatherController";
import { expect } from "chai";
import sinon from "sinon";
import OpenWeatherMap from "../../src/Connector/OpenWeatherMap";
import axios from "axios";

describe("WeatherController test", function() {
    let controller, getInfoFromCityStub, axiosStub;

    const callbackSpy = sinon.spy(), OpenWeatherMapBkp = OpenWeatherMap;

    before(function() {
        const data = {
            data: {
                main: {}
            }
        };

        getInfoFromCityStub = sinon.stub(OpenWeatherMap, "getInfoFromCity").resolves(data);

        axiosStub = sinon.stub(axios, "get").resolves(null);

        global.localStorage = {
            getItem: function() {},
            setItem: function() {}
        };

        global.setTimeout = function() {};

        controller = new WeatherController("test", callbackSpy);
    });

    after(function() {
        getInfoFromCityStub.restore();
        axiosStub.restore();
    });

    it("should construct", function() {
        expect(controller).to.be.instanceOf(WeatherController);
    });

    it("should setDataFromApi", function() {
        const data = {
            data: {
                main: {}
            }
        };

        controller.setDataFromAPI(data);
        expect(callbackSpy.calledOnce).to.be.true;
    });

    it("should getData from backend", function() {
        controller.getData();

        expect(getInfoFromCityStub.called).to.be.true;
    });

    it("should getData from cache", function() {
        const data = {
            lastUpdate: Date.now()
        };

        const jsonParseStub = sinon.stub(JSON, "parse").returns(data);

        global.localStorage = Object.assign(
            global.localStorage,
            {
                getItem: function() {
                    return JSON.stringify(data);
                }
            }
        );

        controller.cachedVerify = function() { return true };

        controller.getData();

        expect(getInfoFromCityStub.called).to.be.true;

        jsonParseStub.restore();
    });
});