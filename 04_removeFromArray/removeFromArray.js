const removeFromArray = function(array, ...args) {
    let returnArrray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
                    returnArrray.push(item);
                }
    }); 
    // for (i = 0; i < returnArrray.length; i++) {
    //     if (array[i]!== value1 && array[i]!== value2 && array[i]!== value3 && array[i]!== value4 && array[i]!== value5 && array[i]!== value6 && array[i]!== value7 && array[i]!== value8 && array[i]!== value9) {
    //                 returnArrray.push(array[i]);
    //             }
    // }
    return returnArrray;
};

// Do not edit below this line
module.exports = removeFromArray;
