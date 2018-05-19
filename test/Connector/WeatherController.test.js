import WeatherController from "../../src/Connector/WeatherController";
import { expect } from "chai";
import sinon from "sinon";
import OpenWeatherMap from "../../src/Connector/OpenWeatherMap";
import axios from "axios";

describe("WeatherController test", function() {
    let controller, getInfoFromCityStub;

    const callbackSpy = sinon.spy(), OpenWeatherMapBkp = OpenWeatherMap;

    before(function() {
        const data = {
            data: {
                main: {}
            }
        };

        getInfoFromCityStub = sinon.stub(OpenWeatherMap, "getInfoFromCity").resolves(data);

        sinon.stub(axios, "get").resolves(null);

        global.localStorage = {
            getItem: function() {},
            setItem: function() {}
        };
    });

    it("should construct", function() {
        controller = new WeatherController("test", callbackSpy);
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
        global.setTimeout = function() {};
        controller.getData();

        expect(getInfoFromCityStub.called).to.be.true;
    });
});