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
    
            return message.reply(', you dont have any coins! Made a balance! run the command again!');
        }
        else {
            let item = args[0];
            item = item.toLowerCase();
            if(!item) return message.channel.send("You did not specify an item to buy!")
            if(item == "trophy") {
                var amt = parseInt(args[1]);
                if(!amt) amt = 1;
                if(amt <= 0) return message.channel.send("POSITIVE INTEGERS FOR THE TROPHY AMOUNT")

                if((amt*10) > money.money) {
                    return message.channel.send(`You do not have enough money to buy ${amt} trophies!`);
                } else {
                    
                    let bal = parseInt(money.money);
                    let result = bal - (amt*10);
                    let tro = parseInt(money.trophies);
                    let e = tro + amt;
                    
                    money.money = result;
                    money.trophies = e;
                    money.save().catch(err => console.error(err));
                    
                    message.channel.send(`You have bought ${amt} trophies!`);
                
                }

            


            } else 

            if(item == "xp") {
                var amt = parseInt(args[1]);
                if(!amt) amt = 1;
                if(amt <= 0) return message.channel.send("POSITIVE INTEGERS FOR THE XP AMOUNT")

                if((amt) > money.money) {
                    return message.channel.send(`You do not have enough money to buy ${amt} xp!`);
                } else {
                    
                    let bal = parseInt(money.money);
                    let result = bal - (amt*1);
                    let tro = parseInt(money.xp);
                    let e = tro + amt;
                    
                    money.money = result;
                    money.xp = e;
                    money.save().catch(err => console.error(err));
                    
                    message.channel.send(`You have bought ${amt} xp! Every 100 XP = 1 Level`);
                
                }

            


            } else {
                return message.channel.send("You can only buy trophies OR exp as of now! Please do yo buy <trophy/xp> <amt>") 
            }

        }
    }); // money

}

module.exports.help = {
    name: "buy",
    aliases: []
}