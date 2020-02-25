module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            if (arr.length === 0) return 1;
            return Math.max(...arr.map(el => this.calculateDepth(el))) + 1;

        } else {
            return 0;
        }
    }

};
