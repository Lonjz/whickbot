const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Money = require("../config/data.js")

module.exports.run = async (client, message, args) => {
    
    if (!args) {
        return message.reply(`please use yo gamble <coins amt>`);
    }

    const amount = parseInt(args[0]);

    if (isNaN(amount)) {
        return message.reply('please enter a valid number for the amount of xp/coin you want to gamble.');
    }

    if (amount > 1000) {
        return message.reply('the maximum gamble amount is 1000 coins!')
    }

    const result = ((Math.floor(Math.random() * 2.5 + 0) * Math.floor(amount)));

    Money.findOne({
        userID: message.author.id,
    }, (err, money) => {
        if (err) {
            console.error(err);
            return message.reply('sorry, an error occurred!');
        }
        if (!money) {
            const newMoney = new Money({
                name: message.author.username,
                userID: message.author.id,
                money: 0,
                bank: 0,
                passive: "no",
                trophies: 0,
                xp: 0,
                color: "#RANDOM",
            });

            newMoney.save().catch(err => console.error(err));

            return message.reply('you can\'t participat since you do not have any coins associated with your account');
        }
        else {
            if (amount > money.money) {
                return message.reply('you do not have enough coins to gamble!');
            }

            money.money = money.money - amount + result;
            money.save().catch(err => console.error(err));

            if (result === amount) {
                return message.reply(' have your captial back with no profit.');
            }
            else if (result > amount) {
                return message.reply(` have gained a profit of ${result - amount} money, congrats!`);
            }
            else {
                return message.reply(` RIP, you have lost ${amount - result}`);
            }
        }
    });
}

module.exports.help = {
    name: "gamble",
    aliases: []
}