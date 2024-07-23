const mongoose = require('mongoose');
const Discord = require('discord.js');
const config = require('../config.json');
const cmd = new Set();

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Data = require("../config/data.js")

module.exports.run = async (client, message, args) => {

    if(cmd.has(message.author.id)){

        if(message.author.id == "705085537723088986") cmd.delete(message.author.id);

        message.channel.send(`You are only allowed to change your passive settings every hour!`)
    }  else {
    
    let set = args.join(" ");

    

    Data.findOne({
        userID: message.author.id
    }, (err, data) => {
        if(!data){
            const newData = new Data({
                name: message.author.username,
                userID: message.author.id,
                money: 0,
                bank: 0,
                passive: "no",
                trophies: 0,
                xp: 0,
                color: "#RANDOM",
            })
            newData.save().catch(err => console.log(err));
            return message.channel.send(`Registered you into the system! You were not previously in my servers!`)
        }
        else {

            if(!set) {
                let embed = new Discord.MessageEmbed()
                .setFooter("economy still in beta as usual")
                .setTitle(":white_check_mark: Your passive setting")
                .setDescription(`Setting: **${data.passive}**`)
                .setTimestamp()
                .setColor("RANDOM")
                
                message.channel.send(embed);
            } else 

            if(set == "yes") {
                data.passive = "yes";
                data.save().catch(err => console.log(err));
                message.channel.send("Set your passive mode to on!")
            } else if(set == "no") {
                data.passive = "no";
                data.save().catch(err => console.log(err));
                message.channel.send("Set your passive mode to off!")
            } else {
                return message.channel.send("Invalid usage! Do yo passive <yes/no> next time!")
            }

        }
    });

    cmd.add(message.author.id);
        setTimeout(() => {  
            cmd.delete(message.author.id);
        }, 1000*60*60*1);
}
}



module.exports.help = {
    name: "passive",
    aliases: []
}