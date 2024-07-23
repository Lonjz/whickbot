const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];

        let tie = new Discord.MessageEmbed()
        .setTitle("TIE!")
        .setColor("RANDOM")
        .setDescription(`I chose ${result}, you chose ${choice}`)
        .setFooter("rps")
        .setTimestamp();

        if (!choice) return message.channel.send(`How to play: \`yo rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        if (result === choice) return message.channel.send(tie);
        
        switch (choice) {
            case 'rock': {

                let win = new Discord.MessageEmbed()
                .setTitle("I win!")
                .setColor("RANDOM")
                .setDescription("I chose :roll_of_paper: , you chose :rock:")
                .setFooter("rps")
                .setTimestamp();

                let lose = new Discord.MessageEmbed()
                .setTitle("You win!")
                .setColor("RANDOM")
                .setDescription("I chose :scissors: , you chose :rock:")
                .setFooter("rps")
                .setTimestamp();

                if (result === 'paper') return message.channel.send(win);
                else return message.channel.send(lose);
            }
            case 'paper': {

                let win = new Discord.MessageEmbed()
                .setTitle("I win!")
                .setColor("RANDOM")
                .setDescription("I chose :scissors: , you chose :roll_of_paper:")
                .setFooter("rps")
                .setTimestamp();

                let lose = new Discord.MessageEmbed()
                .setTitle("You win!")
                .setColor("RANDOM")
                .setDescription("I chose :rock: , you chose :roll_of_paper:")
                .setFooter("rps")
                .setTimestamp();

                if (result === 'scissors') return message.channel.send(win);
                else return message.channel.send(lose);        
            }
            case 'scissors': {

                let win = new Discord.MessageEmbed()
                .setTitle("I win!")
                .setColor("RANDOM")
                .setDescription("I chose :rock: , you chose :scissors:")
                .setFooter("rps")
                .setTimestamp();

                let lose = new Discord.MessageEmbed()
                .setTitle("You win!")
                .setColor("RANDOM")
                .setDescription("I chose :roll_of_paper: , you chose :scissors:")
                .setFooter("rps")
                .setTimestamp();

                if (result === 'rock') return message.channel.send(win);
                else return message.channel.send(lose);
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
    }

module.exports.help = {
    name: "rps",
    aliases: ["rockpaperscissors"]
}