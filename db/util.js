const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const getRandomFromArray = arrayName => arrayName[Math.floor(Math.random() * arrayName.length)];

exports.getRandomInt = getRandomInt;
exports.getRandomFromArray = getRandomFromArray;