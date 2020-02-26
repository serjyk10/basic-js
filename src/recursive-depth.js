module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return Array.isArray(arr) ? (arr.length == 0 ? 1 : 1 + Math.max(...arr.map(el => this.calculateDepth(el)))) : 0; 
     }
};
