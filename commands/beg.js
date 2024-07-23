const usedCMD = new Set();
const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Money = require("../config/data.js")

module.exports.run = async (client, message, args) => {

    if(usedCMD.has(message.author.id)){

        if(message.author.id == "705085537723088986") usedCMD.delete(message.author.id);

        message.channel.send(`You are only allowed to beg every minute!`)
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
                
                var amt = Math.floor(Math.random() * 20);
                let person = [
                    "Zero Two",
                    "Dev Lon",
                    "Peter Griffin",
                    "Thanos",
                    "I, whick",
                    "Chicken man",
                    "The Discord Mod",
                    "Rico",
                    "Spike",
                    "Fatty",
                    "Ninja"
                ]
                var e = (Math.floor(Math.random() * Math.floor(person.length)));
    
                var currentl = parseInt(money.money);
                var amount = parseInt(amt)
                var bal = (currentl + amount).toString();
     
                money.money = bal;
                money.save().catch(err => console.error(err));

                let resp = [
                    "what a generous payment",
                    "congradutlations",
                    "you better pay it back later on",
                    "no once cares about your money though",
                    "lmao",
                    "go buy yourself some vbucks",
                    "stop begging",
                    "magine begging",
                    "XD",
                    "now you can stop asking people for money!",
                    "go buy a life",
                    "cgcg",
                    "you are forever grateful",
                ]
                var rand = (Math.floor(Math.random() * Math.floor(resp.length)));
    
                message.channel.send(`**${person[e]}** gave you **${amt}** coins, ` + resp[rand]);
            }
        });

        usedCMD.add(message.author.id);
        setTimeout(() => {  
            usedCMD.delete(message.author.id);
        }, 1000*60);
    }

        
   }

module.exports.help = {
    name: "beg",
    aliases: []
}