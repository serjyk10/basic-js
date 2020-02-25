module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    const solutionObj = {
        turns: 0,
        seconds: 0
    };
    solutionObj.turns = Math.pow(2, disksNumber) - 1;
    solutionObj.seconds = solutionObj.turns /  (turnsSpeed / 3600);
    return solutionObj;
}