module.exports = function toReadable(number) {
    let numberString = number.toString();
    let readable = "";

    // names from 0 to 9
    const oneDigitName = (num) => {
        switch (num) {
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
            return `${oneDigitName(strNum[1])}teen`
        }
        if (num < 20) {
            return `${twoDigitName(strNum[1])}teen`;
        }
        result = `${twoDigitName(strNum[0])}ty`;
        if (strNum[1] !== "0") {
            result += ` ${oneDigitName(strNum[1])}`;
        }
        return result;
    };

    // from 0 to 9 readable
    if (number < 10) {
        readable = oneDigitName(numberString);
        return readable;
    }

    // from 10 to 99 readable
    if (numberString.length === 2) {
        readable = twoDigitReadable(numberString);
        return readable;
    }

    // from 100 to 999 readable
    if (numberString.length === 3) {
        readable = `${oneDigitName(numberString[0])} hundred`;
        if (numberString[1] === "0" && numberString[2] !== "0") {
            readable += ` ${oneDigitName(numberString[2])}`;
        }
        if (numberString[1] !== "0") {
            let i = numberString[1] + numberString[2];
            readable += ` ${twoDigitReadable(i)}`;
        }
    }

    return readable;
};
