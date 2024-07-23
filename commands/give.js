const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Money = require("../config/data.js")

module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first();
    let amt = parseInt(args[1]);

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

            if(!user) return message.channel.send("Mention a user to give money to!");
            if(!amt) return message.channel.send("Enter a valid ammount to share to!")

            Money.findOne({
                userID: user.id,
            }, (err, giver) => {
                if (err) {
                    console.error(err);
                    return message.reply('Sorry, an error occurred!');
                }
                if (!giver) {
                    const newMoney = new Money({
                        name: user.username,
                        userID: user.id,
                        money: 0,
                        bank: 0,
                        passive: "no",
                        trophies: 0,
                        xp: 0,
                    });
            
                    newMoney.save().catch(err => console.error(err));
            
                    return message.reply(user + ' did not have a balance! Made a balance! run the command again!');
                }
                else {

                   if(amt > money.money) return message.channel.send("You do not have that much coins in your wallet!");

                   money.money = money.money - amt;
                   giver.money = giver.money + amt;

                   message.channel.send(`Successfully gave ${amt} to ${user.username}`);

                   money.save().catch(err => console.error(err));
                   giver.save().catch(err => console.error(err));

                }
            });
            
        }
    });

}

module.exports.help = {
    name: "give",
    aliases: []
}