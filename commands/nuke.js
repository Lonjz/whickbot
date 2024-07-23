const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("You Don\'t have `MANAGE_CHANNELS` to do this command!");

    let link = 'https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831';
    let position = message.channel.position;

    message.channel.clone()
    .then(channel => {
        channel.send('\n :white_check_mark: **Nuked this channel!**')
        channel.send(link)
        channel.setPosition(position)
    });

    message.channel.delete();

}

module.exports.help = {
    name: "nuke",
    aliases: []
}