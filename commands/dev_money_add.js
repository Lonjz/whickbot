const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Data = require("../config/data.js")

module.exports.run = async (client, message, args) => {
    
    if(message.author.id != "705085537723088986") return message.channel.send("You aren't Lon!")

    let user = message.mentions.members.first() || message.author;
    let amt = parseInt(args[1]);

    if(!amt) return message.channel.send("NUMBERINO ONLY LON");

    Data.findOne({
        userID: user.id
    }, (err, data) => {
        if(!data){
            const newData = new Data({
                name: user.username,
                userID: user.id,
                money: amt,
                bank: 0,
                passive: "no",
                trophies: 0,
                xp: 0,
                color: "#RANDOM",
            })
            newData.save().catch(err => console.log(err));
            message.channel.send(`${user.username} gained ${amt} coins`)
        }
        else {
            var mon = parseInt(data.money);
            var amount = parseInt(amt);
            var e = mon + amount;
            data.money = e;
            data.save().catch(err => console.log(err));
            message.channel.send(`${data.name} gained ${amt} coins`);
        }
    });
}

module.exports.help = {
    name: "devadd",
    aliases: []
}