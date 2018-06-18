const casual = require("casual");

const getRandomInt = require("../util").getRandomInt;

casual.define('user', () => ({
    uuid: casual.uuid,
    username: casual.username,
    email: casual.email,
    prefix: casual.name_prefix,
    first_name: casual.first_name,
    last_name: casual.last_name,
    company_name: casual.company_name
}));

const data = [];

const userQuantity = 200;

for(let i = 0; i < getRandomInt(userQuantity); i++) {
    const user = casual.user;

    data.push(user);
}

// export data;
module.exports = data;