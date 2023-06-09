
// This is what I coded.
// const sumAll = function(int1, int2) {
//     let sum = 0;
//     if (int1 < 0 || int2 < 0 ) {
//         return "ERROR";
//     } else if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
//         return "ERROR";
//     } else if (int2 > int1) {
//         for (let i = int1; i <= int2; i++) {
//             sum += i;
//         }
//         return sum;
//     } else {
//         for (let i = int2; i <= int1; i++) {
//             sum += i;
//         }
//         return sum;
//     }
// }

const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
  };

// Do not edit below this line
module.exports = sumAll;
