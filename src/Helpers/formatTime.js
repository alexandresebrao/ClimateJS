const getHour = function(hour) {
    const hourResponse = {hour: hour};
    if (hour > 12) {
        hourResponse.hour = hour - 12;
        hourResponse.suffix = "PM";
    } else {
        hourResponse.suffix = "AM";
    }

    if (hour < 10) {
        hourResponse.hour = "0"+ hourResponse.hour;
    }

    return hourResponse;
};

const formatTime = function(time) {
    if (time > 10) return time;

    return "0" + time;
};

export default function(time) {
    var dateNow = new Date(), hourObj = getHour(dateNow.getHours());

    return formatTime(hourObj.hour) +
        ":" +
        formatTime(dateNow.getMinutes()) +
        ":" + dateNow.getSeconds() +
        " " +
        hourObj.suffix;
};