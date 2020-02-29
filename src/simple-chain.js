const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  
  addLink(value) {
    if (arguments.length == 0) this.chain.push('( )');
    if (typeof value == "object" && value != null) value = value.toString();
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (!(typeof position === 'number') || !Number.isInteger(position) || position > this.chain.length - 1 || position < 1) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);

    return this;

  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.reduce((str, cur, i) => {
      if (i == 0) return str += `( ${cur} )`;
      return str += `~~( ${cur} )`;
    }, '');

    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
