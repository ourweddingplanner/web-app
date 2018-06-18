const casual = require("casual");

const getRandomInt = require("../util").getRandomInt;

casual.define('message', () => ({
    uuid: casual.uuid,
    content: casual.sentence,
    timestamp: casual.unix_time,
    languageCode: casual.language_code
}));

const data = [];

const messageQuantity = 2000;

for(let i = 0; i < getRandomInt(messageQuantity); i++) {
    const message = casual.message;

    data.push(message);
}

// export data;
module.exports = data;