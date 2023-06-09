const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    else if (n === 0) return 0;
    else {
        let i = 0, j = 1;
        for (let k = 1 ; k < n; k++) {
            j = i + j;
            i = j - i;
        }
        return j;
    }; 
};

// Do not edit below this line
module.exports = fibonacci;
