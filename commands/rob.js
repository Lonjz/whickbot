const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');
const usedCMD = new Set();

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Money = require("../config/data.js")

module.exports.run = async (client, message, args) => {

    if(usedCMD.has(message.author.id)){

        if(message.author.id == "705085537723088986") usedCMD.delete(message.author.id);

        message.channel.send(`You are only allowed to try to rob every minute!`)
    }  else {
    
    let user = message.mentions.users.first();

    if(!user) return message.channel.send("Mention a user to rob from them!");

    var i = Math.floor(Math.random() * 2) + 1;

    if(i == 1) {
        {
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
        
                    return message.reply('That user does not have any money!');
                }
                else {
                    if (money.passive == "yes"){
                        return message.channel.send(`${user.username} is in passive mode! To enable passive do yo passive <yes/no>`)
                    } else {
                    
                        Money.findOne({
                            userID: message.author.id,
                        }, (err, person) => {
                            if (err) {
                                console.error(err);
                                return message.reply('Sorry, an error occurred!');
                            }
                            if (!person) {
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
                    
                                return message.channel.send('You were not registered in the system! Succesfully registered you in!');
                            }
                            else {
    
                                if(person.passive == "yes") {
                                    return message.channel.send("You are in passive mode!")
                                } else if (money.passive == "yes") {
                                    return message.channel.send(`${money.name} is in passive mode!`)
                                } else if(money.money <= 10) {
                                    return message.channel.send(`${user.username} is under 10 coins stop being greedy!`)
                                } else{
    
                                    let response = [
                                        "You were caught by the popo :skull:",
                                        "Failed! You're not sneaky enough",
                                        "LMAO YOU ARE A TRASH THEIF",
                                        "You are a very bad robber, get a better job"
                                    ]
                                    let e = (Math.floor(Math.random() * Math.floor(response.length)));
                                    message.channel.send(response[e])
                            }
                        }
                        });
    
    
                }
                }
            });
        }
    }
    

    if(i == 2) {
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
    
                return message.reply('That user does not have any money!');
            }
            else {
                if (money.passive == "yes"){
                    return message.channel.send(`${user.username} is in passive mode! To enable passive do yo passive <yes/no>`)
                } else {
                
                    Money.findOne({
                        userID: message.author.id,
                    }, (err, person) => {
                        if (err) {
                            console.error(err);
                            return message.reply('Sorry, an error occurred!');
                        }
                        if (!person) {
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
                
                            return message.channel.send('You were not registered in the system! Succesfully registered you in!');
                        }
                        else {

                            if(person.passive == "yes") {
                                return message.channel.send("You are in passive mode!")
                            } else if (money.passive == "yes") {
                                return message.channel.send(`${money.name} is in passive mode!`)
                            } else if(money.money <= 10) {
                                return message.channel.send(`${user.username} is under 10 coins stop being greedy!`)
                            } else{

                            var gain = (Math.floor(Math.random() * 5) + 1);
                            var cash = parseInt(money.money);

                            var update = Math.floor(cash / gain);
                            
                            money.money = money.money - update; // robbable users money
                            person.money = person.money + update; //authors money

                            person.save().catch(err => console.error(err));
                            money.save().catch(err => console.error(err));

                            message.channel.send(`You have robbed ${update} from ${user.username}`);
                        }
                    }
                    });


            }
            }
        });
    }


    usedCMD.add(message.author.id);
    setTimeout(() => {  
        usedCMD.delete(message.author.id);
    }, 1000*60);
}
    }



module.exports.help = {
    name: "rob",
    aliases: ["steal"]
}