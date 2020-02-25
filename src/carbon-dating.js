const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const RADIOACTIVE_DECAY = 0.693;

module.exports = function dateSample(sampleActivity) {

  if (typeof (sampleActivity) != 'string' ||
    typeof (parseFloat(sampleActivity)) !== 'number' || parseFloat(sampleActivity) > 15 ||
    parseFloat(sampleActivity) <= 0 ||
    isNaN(parseFloat(sampleActivity))) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (RADIOACTIVE_DECAY / HALF_LIFE_PERIOD));
};

