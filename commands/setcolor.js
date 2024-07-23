const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Money = require("../config/data.js");

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
    
            return message.reply(', you dont have any coins! Made a balance! run the command again!');
        }
        else {

            if( (Math.floor( (money.xp) /100) +1) < 5){
                return message.channel.send("You are not level 5! You can only set your color at level 5.")
            } else {

            if(!money.color) {
                money.color = "#RANDOM";
                money.save().catch(err => console.error(err));
                return message.channel.send("An error occured! Run the command again!");
            } else {
                let color = args.join(" ");
                let noclr = new Discord.MessageEmbed()
                .setColor(money.color)
                .setTitle("<- Current Color")
                .setDescription(`To change this please do: yo setcolor <#COLORS>\n Change the color for you inventory! \n Current Color: ${money.color}`)
                if(!color) return message.channel.send(noclr);
                if(!color.startsWith("#")) return message.channel.send("Please enter the color you want for your inventory to be HEX, eg #FF0000");

                if(color.startsWith("#") && color.length == 7) {
                    money.color = color;
                    money.save().catch(err => console.error(err));

                    let embed = new Discord.MessageEmbed()
                    .setColor(color)
                    .setTitle("<- Color has been set for your inventory!")
                    message.channel.send(embed)
                } else if(color.length > 7) return message.channel.send("Invalid color!")
            }


            }
        }
    });


}

module.exports.help = {
    name: "setcolor",
    aliases: []
}