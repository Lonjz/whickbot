const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');
const timer = new Set();

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Money = require("../config/data.js")

module.exports.run = async (client, message, args) => {

    if(timer.has(message.author.id)){

        if(message.author.id == "705085537723088986") timer.delete(message.author.id);

        message.channel.send(`You can only collect your daily every day! duhh`)
    }  else {

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
            var bal = parseInt(money.money);
            var daily = 100;
            var total = bal + daily;
            money.money = total;
            money.save().catch(err => console.error(err));

            let embed = new Discord.MessageEmbed()
            .setTitle(":white_check_mark: Daily collected!")
            .setDescription(`You have collected your daily reward of **${daily}** into your balance`)
            .setColor("RANDOM")
            .setFooter("economy cmds are still in beta, this cooldown is NOT")
            .setTimestamp()

            message.channel.send(embed);
        }
    });

    timer.add(message.author.id);
        setTimeout(() => {  
            timer.delete(message.author.id);
        }, 1000*60*60*24);
}
}



module.exports.help = {
    name: "daily",
    aliases: []
}