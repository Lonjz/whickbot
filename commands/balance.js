const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Data = require("../config/data.js")

module.exports.run = async (client, message, args) => {
    
    let user = message.mentions.members.first() || message.author;

    Data.findOne({
        userID: user.id
    }, (err, data) => {
        if(!data){
            const newData = new Data({
                name: user.username,
                userID: user.id,
                money: 0,
                bank: 0,
                passive: "no",
                trophies: 0,
                xp: 0,
                color: "#RANDOM",
            })
            newData.save().catch(err => console.log(err));

            let embed = new Discord.MessageEmbed()
            .setTitle(user.username + "'s Balance")
            .setDescription(`**Wallet**: 0 \n **Bank**: 0 \n **Total**: 0`)
            .setColor("RANDOM")
            .setFooter("BALANCE CMDS IN BETA")
            .setTimestamp();

            return message.channel.send(embed)
        }
        else {

            var e = parseInt(data.money)
            var bank = parseInt(data.bank)
            var total = e + bank;

            let bal = new Discord.MessageEmbed()
            .setTitle(data.name + "'s Balance")
            .setDescription(`**Wallet**: ${data.money} \n **Bank**: ${data.bank} \n **Total**: ${total}`)
            .setColor("RANDOM")
            .setFooter("BALANCE CMDS IN BETA")
            .setTimestamp();

            return message.channel.send(bal);
        }
    })
}

module.exports.help = {
    name: "bal",
    aliases: ["balance"]
}