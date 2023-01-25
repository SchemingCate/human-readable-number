module.exports = function toReadable(inputInt) {
    let inputString = inputInt.toString();
    let outputReadable = "";

    // converts string with simple base-ten (from 0 to 9) numerals to word string
    const oneDigitNumString = (numStr) => {
        switch (numStr) {
            case "0":
                return "zero";
            case "1":
                return "one";
            case "2":
                return "two";
            case "3":
                return "three";
            case "4":
                return "four";
            case "5":
                return "five";
            case "6":
                return "six";
            case "7":
                return "seven";
            case "8":
                return "eight";
            case "9":
                return "nine";
        }
    };

    // half name or name for 10, 11, 12
    const twoDigitName = (num) => {
        switch (num) {
            case "2":
                return "twen";
            case "3":
                return "thir";
            case "4":
                return "for";
            case "5":
                return "fif";
            case "6":
                return "six";
            case "7":
                return "seven";
            case "8":
                return "eigh";
            case "9":
                return "nine";
            case "10":
                return "ten";
            case "11":
                return "eleven";
            case "12":
                return "twelve";
        }
    };

    // convert number consisting of two digits into readable
    const twoDigitReadable = (strNum) => {
        let num = Number(strNum);
        let result = "";
        if (num < 13) {
            return twoDigitName(strNum);
        }
        if (num === 14) {
            return `${oneDigitNumString(strNum[1])}teen`
        }
        if (num < 20) {
            return `${twoDigitName(strNum[1])}teen`;
        }
        result = `${twoDigitName(strNum[0])}ty`;
        if (strNum[1] !== "0") {
            result += ` ${oneDigitNumString(strNum[1])}`;
        }
        return result;
    };

    // output for one digit numerals
    if (inputInt < 10) {
        outputReadable = oneDigitNumString(inputString);
        return outputReadable;
    }

    // from 10 to 99 readable
    if (inputString.length === 2) {
        outputReadable = twoDigitReadable(inputString);
        return outputReadable;
    }

    // from 100 to 999 readable
    if (inputString.length === 3) {
        outputReadable = `${oneDigitNumString(inputString[0])} hundred`;
        if (inputString[1] === "0" && inputString[2] !== "0") {
            outputReadable += ` ${oneDigitNumString(inputString[2])}`;
        }
        if (inputString[1] !== "0") {
            let i = inputString[1] + inputString[2];
            outputReadable += ` ${twoDigitReadable(i)}`;
        }
    }

    return outputReadable;
};
