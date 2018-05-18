const getHour = function(hour) {
    const hourResponse = {hour: hour};
    if (hour >= 12) {
        hourResponse.hour =  hour === 12 ? 12 : hour - 12;
        hourResponse.suffix = "PM";
    } else {
        hourResponse.suffix = "AM";
    }

    return hourResponse;
};

const formatTime = function(time) {
    if (time < 10) return "0" + parseInt(time, 10);

    return parseInt(time, 10);

};

export default function(time) {
    const date = new Date(time), hourObj = getHour(date.getHours());

    return formatTime(hourObj.hour) +
        ":" +
        formatTime(date.getMinutes()) +
        ":" +
        formatTime(date.getSeconds()) +
        " " +
        hourObj.suffix;
};