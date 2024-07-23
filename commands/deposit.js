const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Money = require("../config/data.js")

module.exports.run = async (client, message, args) => {

    let amt = args.join(" ");

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

            return message.reply(', you dont have any coins!');
        }
        else {

            if(amt.toLowerCase() == "all") {
                amt = money.money;
            } else if(isNaN(amt)) {
                return message.channel.send("Enter the deposit amount as a positive integer!")
            } 
            if(amt <= 0) {
                return message.channel.send("Enter the deposit amount as a positive integer!")
            }
            if (amt > money.money) {
                return message.reply('You don\'t have that much coins!');
            }
            
            var currentb = parseInt(money.bank);
            var currentl = parseInt(money.money);
            var amount = parseInt(amt)

            var bank = (currentb + amount).toString();
            var bal = (currentl - amount).toString();
            
            
      
            money.money = bal;
            money.bank = bank;
            money.save().catch(err => console.error(err));

            let embed = new Discord.MessageEmbed()
            .setTitle("Succesfully deposited!")
            .setDescription(`**${amt}** coins has been added added to your bank`)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter("ECO CMDS STILL IN BETA")

            message.channel.send(embed);

         
        }
    });
    
    }



module.exports.help = {
    name: "dep",
    aliases: ["deposit"]
}