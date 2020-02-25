module.exports = function createDreamTeam(members) {
  return arguments.length == 0 || !Array.isArray(members) ? false : members.filter((el) => typeof el === 'string').reduce((finArr, curEl) => {
    finArr.push(curEl.trim()[0].toUpperCase())
    return finArr;
    }, []).sort().join('');
};