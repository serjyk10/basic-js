module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let resultArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--discard-next') {
                if (i + 1 < arr.length) {
                    i++;
                }
                continue;
            }

            if (arr[i] == '--discard-prev') {
                if (i >= 0) {
                    resultArr.pop();
                }
                continue;

            }

            if (arr[i] == '--double-next') {
                if (i + 1 < arr.length) {
                    resultArr.push(arr[i + 1]);
                }
                continue;

            }

            if (arr[i] == '--double-prev') {
                if (i - 1 >= 0) {
                    resultArr.push(arr[i - 1]);
                }
                continue;
            }
            resultArr.push(arr[i]);
        }

        return resultArr;
    } else {
        throw new Error();
    }
};
