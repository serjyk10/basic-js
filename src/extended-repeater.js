module.exports = function repeater(str, options) {
    const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
    ;
    let additionPart;

    if (addition !== undefined) {
        additionPart = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator || '|');
    }

    let strPart = additionPart ? String(str) + additionPart : String(str);
    let result = new Array(repeatTimes).fill(strPart).join(separator || '+');

    return result;
}