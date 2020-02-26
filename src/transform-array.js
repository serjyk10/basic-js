module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--discard-next') {
                i++;
                continue;
            }

            if (arr[i] == '--discard-prev') {
                if (i < arr.length) {
                    newArr.pop();
                }
                continue;

            }

            if (arr[i] == '--double-next') {
                if (i + 1 < arr.length) {
                    newArr.push(arr[i + 1]);
                }
                continue;

            }

            if (arr[i] == '--double-prev') {
                if (i - 1 >= 0) {
                    newArr.push(arr[i - 1]);
                }
                continue;
            }
            newArr.push(arr[i]);
        }

        return newArr;
    } else {
        throw new Error();
    }
};
