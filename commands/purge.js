module.exports.run = async (client, message, args) => {

    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
        return message.reply(
          ":no_entry: | You dont have `MANAGE_MESSAGES` Permission"
        );

    var amount = parseInt(args[0]) + 1;

    if(!amount) return message.channel.send("Please use the command as `yo purge <1-100>`")

    if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number');
    }

    else if (amount < 1 || amount > 101) {
        return message.reply('you need to input a number between 1 and 100.');
    }

    message.channel.bulkDelete(amount, true).catch(err => {
        console.log(err);
        message.channel.send('there was an error trying to prune messages in this channel' + err);
    });
}

module.exports.help = {
    name: "purge",
    aliases: ["prune"]
}