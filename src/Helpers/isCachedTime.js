module.exports = function(startTime, endTime) {
    var timeDifference = endTime - startTime;

    return (timeDifference / 60000) < 3
};