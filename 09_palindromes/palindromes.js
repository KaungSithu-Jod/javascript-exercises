const palindromes = function (sentence) {
    const processedSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
    return processedSentence === processedSentence.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
