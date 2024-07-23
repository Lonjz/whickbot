const Discord = require("discord.js")
const request = require("superagent")

module.exports.run = async (client, message, args) => {
    const user = message.mentions.members.first() || message.author

    request.get('http://quandyfactory.com/insult/json/')
        .end((err, res) => {
            if (!err && res.status === 200) {
                const fancyinsult = res.body;
                message.channel.send(`${user}, ${fancyinsult.insult}`);
            } 
            else {
                message.channel.send(`REST call failed: ${err}`)
            }
        });
}

module.exports.help = {
    name: "insult",
    aliases: ["roast", "burn"]
}