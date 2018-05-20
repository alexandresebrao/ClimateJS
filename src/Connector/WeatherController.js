import isCachedTime from "../Helpers/isCachedTime";
import OpenWeatherMap from "./OpenWeatherMap";

export default class WeatherController {
    constructor(city, callback) {
        this.callback = callback;
        this.city = city;
        this.setDataFromAPI = this.setDataFromAPI.bind(this);
        this.getData = this.getData.bind(this);
    }

    setDataFromAPI(response) {
        this.data = response.data.main;
        this.data.lastUpdate = new Date().getTime();

        localStorage.setItem(this.city, JSON.stringify(this.data));
        this.handleUpdate();
    }

    handleUpdate() {
        this.callback(this.data);
    }

    getData() {
        var localData = localStorage.getItem(this.city), dateNow = new Date().getTime(),
            localDataJS = localData ? JSON.parse(localData) : undefined;


        if (localDataJS && isCachedTime(localDataJS.lastUpdate, dateNow) ) {
            this.data = localDataJS;
            this.handleUpdate();
        } else {
            OpenWeatherMap.getInfoFromCity(this.city)
                .then(this.setDataFromAPI)
        }

        setTimeout(this.getData, 10 * 60 * 1000);
    }
}