var axios = require("axios");

var OpenWeatherMapAPI = {
    connector: axios,
    apiKey: "03a157008e36c9b8c4a4d9fb0485ca3b",
    url: "https://api.openweathermap.org/data/2.5/weather",
    getUrl: function(city) {
        return this.url + "?q=" + city + "&APPID=" + this.apiKey + "&units=metric";
    },
    getInfoFromCity: function(city) {
        return this.connector.get(this.getUrl(city));
    }
};

module.exports = OpenWeatherMapAPI;