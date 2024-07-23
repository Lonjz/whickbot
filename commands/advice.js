const request = require('superagent');
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    request
            .get('http://api.adviceslip.com/advice')
            .end((err, res) => {
                if (!err && res.status === 200) {
                    try {
                        JSON.parse(res.text)
                    } catch (e) {
                        return message.reply(', an api error occurred.');
                    }
                    const advice = JSON.parse(res.text)
                    const embed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setFooter("Hope it helps! 😉")
                    .setTitle(advice.slip.advice)
                    .setTimestamp()
                    message.channel.send(embed)
                } else {
                console.error(`REST call failed: ${err}, status code: ${res.status}`)
                }
            });
    }


module.exports.help = {
    name: "advice",
    aliases: ["lifetip"]
}