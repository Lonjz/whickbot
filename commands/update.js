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
                color: "#RANDOM",
            });

            newMoney.save().catch(err => console.error(err));

            return message.reply(', you were not registered in the database! Registered you now!');
        }
        else {
            
            money.name = message.author.username;
            money.save().catch(err => console.error(err));

            let embed = new Discord.MessageEmbed()
            .setTitle("Succesfully updated your info!")
            .setDescription(`Updated username to: ${message.author.username}`)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter("ECO CMDS STILL IN BETA")

            message.channel.send(embed);

         
        }
    });
    
    }



module.exports.help = {
    name: "update",
    aliases: []
}