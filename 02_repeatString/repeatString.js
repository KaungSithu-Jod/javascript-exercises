const repeatString = function(string, time) {
    if (time < 0) return 'ERROR';
    else {
        return string.repeat(time);
    }
};

// Do not edit below this line
module.exports = repeatString;
