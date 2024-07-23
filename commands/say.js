module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
        return message.reply(
          ":no_entry: | You dont have `ADMINISTRATOR` Permission"
        );
        const say = args.join(" ")
        if(say == "@everyone" || say == "@here") {
            message.channel.send("`` @Everyone or @here by the bot is not allowed.``")
        }    
        if(!say) return message.reply(":no_entry_sign: | **Say Something**")
        message.delete();
        message.channel.send(say)
}

module.exports.help = {
    name: "say",
    aliases: []
}