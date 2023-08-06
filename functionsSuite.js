function capitalize(str) {
    let newStr = str[0].toUpperCase();
    newStr += str.slice(1);
    return newStr;
}

function reverseString(str) {
    let retStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        retStr += str[i];
    }
    return retStr;
} 

let calculator = {
    add: (a, b) => {return a + b},
    subtract : (a, b) => a - b,
    multiply : (a, b) => a * b,
    divide : (a, b) => a / b 
};

let caesarCipher = function (str, shift) {
    let codeArr = [];
    for (let i = 0; i < str.length; i++) {
        let currCode = str.charCodeAt(i), newCode = currCode;
        if (currCode >= 65 && currCode <= 90) {
            newCode += shift;
            newCode = 65 + ((newCode - 65) % 26);
        }
        if (currCode >= 97 && currCode <= 122) {
            newCode += shift;
            newCode = 97 + ((newCode - 97) % 26);
        }
        codeArr.push(newCode);
    }
    let encStr = String.fromCharCode(...codeArr);
    return encStr;
}

let analyzeArray = function (array) {
    let average = 0;
    let size = array.length;
    let min = Number.MAX_VALUE, max = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        average += array[i];
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    average = average/array.length;
    return {average, "length" : size, min, max};
}

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};