function testVolume(x) {
    return x.reduce((y, z) => y * z);
  }
  
  function findDifference(a, b) {
    return Math.abs(testVolume(a) - testVolume(b));
  }

  module.exports = findDifference;