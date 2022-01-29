// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strObj = {};
    let maxCount = 0;
    let maxChar = '';

    for (char of str) {
        if (!strObj[char]) {
            strObj[char] = 1;
        } else {
            strObj[char]++;
        }
    }

    for (char in strObj) {
        if (strObj[char] > maxCount) {
            maxCount = strObj[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
