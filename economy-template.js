const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Money = require("../config/data.js")

Money.findOne({
    userID: message.author.id,
}, (err, money) => {
    if (err) {
        console.error(err);
        return message.reply('Sorry, an error occurred!');
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

        return message.reply(', you dont have any coins! Made a balance! run the command again!');
    }
    else {
        
    }
});