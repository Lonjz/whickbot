const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Money = require("../config/data.js")

module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || message.author;

    Money.findOne({
        userID: user.id,
    }, (err, money) => {
        if (err) {
            console.error(err);
            return message.reply('Sorry, an error occurred!');
        }
        if (!money) {
            const newMoney = new Money({
                name: user.username,
                userID: user.id,
                money: 0,
                bank: 0,
                passive: "no",
                trophies: 0,
                xp: 0,
                color: "#RANDOM",
            });
    
            newMoney.save().catch(err => console.error(err));
    
            return message.channel.send(user + ', did not have a balance/inventory! Made a balance! run the command again!');
        }
        else {
            var color;

            if(!money.color) {
                money.color = "RANDOM"
                money.save().catch(err => console.error(err));
                color = "RANDOM";
            } else if(money.color == "#RANDOM") {
                color = "RANDOM"
            } else {
                color = money.color;
            }


            let embed = new Discord.MessageEmbed()  
            .setTitle(`${money.name}'s Inventory`)
            .setDescription(`
            :trophy: **Trophies** - ${money.trophies} \n 
            :arrow_up: **Level** - ${Math.floor( (money.xp) /100) +1} \n 
            :lock: **Passive** - ${money.passive.toUpperCase()}
            `)
            .setColor(color)
            .setFooter("eco still in beta lol")
            .setTimestamp()
            
            message.channel.send(embed);
            
        }
    });



}

module.exports.help = {
    name: "inv",
    aliases: ["inventory"]
}