const request = require('superagent');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let firstName = args[0];
    let lastName = args[1];

    if (!firstName) return message.channel.send("Usage: yo joke <first name> <last name>");

    request.get('http://api.icndb.com/jokes/random')
        .query({escape: 'javascript'})
        .query({firstName: firstName})
        .query({lastName: lastName})
        .end((err, res) => {
            if (!err && res.status === 200) {
                let meme = new Discord.MessageEmbed()
                .setTitle(`:joy: ${firstName} ${lastName} is canceled!`)
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter("If you take offense, idc")
                .setDescription(res.body.value.joke);
                
                message.channel.send(meme);
            } else {
                console.error(`REST call failed: ${err}`)
            }
        });
}


module.exports.help = {
    name: "joke",
    aliases: []
}