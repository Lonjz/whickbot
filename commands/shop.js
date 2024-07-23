const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Money = require("../config/data.js")

module.exports.run = async (client, message, args) => {

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
            });
    
            newMoney.save().catch(err => console.error(err));
    
            return message.reply(', you dont have any coins! Made a balance! run the command again!');
        }
        else {
            let embed = new Discord.MessageEmbed()  
            .setTitle(":moneybag: Shop :moneybag:")
            .setDescription("**Items**: \n\n\n :trophy: **Trophies** - 10 Coins Each \n \n :arrow_up: **XP** - 1 Coin Each ")
            .setColor("RANDOM")
            .setFooter("eco still in beta lol")
            .setTimestamp()
            
            message.channel.send(embed);
        }
    });



}

module.exports.help = {
    name: "shop",
    aliases: []
}