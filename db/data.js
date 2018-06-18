// import * as casual from "casual";

const aside = require("./aside");
const menus = require("./menus");
const messages = require("./messages");
const pages = require("./pages");
const products = require("./products");
const users = require("./users");

const getRandomInt = require("./util").getRandomInt;
const getRandomFromArray = require("./util").getRandomFromArray;

const recipientsQuantity = 5;

const server = () => {
    const data = {
        aside,
        menus,
        messages,
        pages,
        products,
        users
    };

    data.messages = data.messages.map(message => {
        const sender = getRandomFromArray(data.users);

        const recipientIds = new Set();

        for(let i = 0; i < getRandomInt(recipientsQuantity); i++) {
            let recipient = getRandomFromArray(data.users);

            recipientIds.add(recipient.uuid);
        }

        while (recipientIds.length < 2) {
            recipient = getRandomFromArray(data.users);
        }

        const formattedMessage = {
            uuid,
            content,
            timestamp,
            languageCode
        } = Object.assign({}, message);

        formattedMessage.sender = {
            uuid: sender.uuid
        };

        formattedMessage.participants = [sender.uuid, ...recipientIds];

        return formattedMessage;
    });

    data.users = data.users.map(user => {
        const matchingMessages = data.messages.filter(message => message.participants.includes(user.uuid)).map(message => {

            const formattedMessage = {
                uuid,
                content,
                timestamp,
                languageCode
            } = Object.assign({}, message);

            if (message.sender) {
                formattedMessage.sender = {
                    uuid: message.sender.uuid
                };
            }

            return formattedMessage;
        });

        user.message_previews = [...matchingMessages];

        return user;
    });

    return data;
};

// export data;
module.exports = server;