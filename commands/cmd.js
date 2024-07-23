module.exports.run = async (client, message, args) => {
    const say = args.join(" ")
    if(say == "avatar") {
        message.channel.send("**Usage:** yo avatar <none/@user> \n**Aliases:** av \n**Access:** Anyone")
    }  
    if(say == "ban") {
        message.channel.send("**Usage:** yo ban <@user> <reason> \n**Aliases:** N/A  \n**Access:** `BAN_MEMBERS` permission")
    }  
    if(say == "itemshop") {
        message.channel.send("**Usage:** yo itemshop \n**Aliases:** N/A \n**Access:** Anyone \n**Note:** This gives the current Fortnite Itemshop")
    } 
    if(say == "kick") {
        message.channel.send("**Usage:** yo kick <@user> <reason> \n**Aliases:** N/A \n**Access:** `KICK_MEMBERS` permission")
    }
    if(say == "meme") {
        message.channel.send("**Usage:** yo meme \n**Aliases:** N/A \n**Access:** Anyone \n**Note:** Random meme from reddit")
    }  
    if(say == "ping") {
        message.channel.send("**Usage:** yo ping \n**Aliases:** pong \n**Access:** Anyone \n**Note:** Gives the Bot/API latency.")
    }  
    if(say == "rps") {
        message.channel.send("**Usage:** yo rps <rock/paper/scissors> \n**Aliases:** rockpaperscissors \n**Access:** Anyone \n**Note:** Rock Paper Scissors with the bot!")
    } 
    if(say == "say") {
        message.channel.send("**Usage:** yo say <message> \n**Aliases:** N/A \n**Access:** `ADMINISTRATOR` permission")
    }  
    if(say == "whois") {
        message.channel.send("**Usage:** yo whois <none/@user> \n**Aliases:** who \n**Access:** `ADMINISTRATOR` permission")
    }   
    if(say == "8ball") {
        message.channel.send("**Usage:** yo 8ball <question> \n**Aliases:** eightball \n**Access:** Anyone")
    }  
    if(say == "insult") {
        message.channel.send("**Usage:** yo insult <@user/none> \n**Aliases:** roast, burn \n**Access:** Anyone")
    }  
    if(say == "anime") {
        message.channel.send("**Usage:** yo anime <anime_name> \n**Aliases:** N/A \n**Access:** Anyone")
    }  
    if(say == "manga") {
        message.channel.send("**Usage:** yo manga <manga_name> \n**Aliases:** N/A \n**Access:** Anyone")
    } 
    if(say == "advice") {
        message.channel.send("**Usage:** yo advice \n**Aliases:** lifetip \n**Access:** Anyone")
    } 
    if(say == "mama") {
        message.channel.send("**Usage:** yo mama \n**Aliases:** yomama \n**Access:** Anyone \n**Note:** Sends random yo mama joke")
    } 
    if(say == "urban") {
        message.channel.send("**Usage:** yo urban <word> \n**Aliases:** dictionary \n**Access:** Anyone \n**Note:** Urban Dictionary")
    } 
    if(say == "dice") {
        message.channel.send("**Usage:** yo dice \n**Aliases:** diceroll, dice \n**Access:** Anyone")
    } 
    if(say == "pp") {
        message.channel.send("**Usage:** yo pp \n**Aliases:** NONE \n**Access:** Anyone")
    } 
    if(say == "quiz") {
        message.channel.send("**Usage:** yo quiz {multiple/boolean} {easy/medium/hard} \n**Aliases:** test \n**Access:** Anyone \n**Note:** 20 seconds to answer each question")
    } 
    
    if(say == "embed") {
        message.channel.send("**Usage:** yo embed <msg> \n**Aliases:** esay \n**Access:** Administrators")
    } 

    if(say == "create") {
        message.channel.send("**Usage:** yo create \n**Aliases:** N/A \n**Access:** Administrators")
    } 

    if(say == "channel") {
        message.channel.send("**Usage:** yo channel #<channel_name> \n**Aliases:** channelinfo \n**Access:** Administrators")
    } 

    if(say == "howdumb") {
        message.channel.send("**Usage:** yo howdumb <@user> \n**Aliases:** dumb \n**Access:** Anyone")
    } 

    if(say == "joke") {
        message.channel.send("**Usage:** yo joke <first_name> <last_name> \n**Aliases:** N/A \n**Access:** Anyone")
    } 

    if(say == "purge") {
        message.channel.send("**Usage:** yo purge <amt> \n**Aliases:** prune \n**Access:** MANAGE_MESSAGES permission")
    }

    if(say == "todayinhistory") {
        message.channel.send("**Usage:** yo todayinhistory <month - number> <day - number> \n**Aliases:** tih \n**Access:** Anyone")
    }
    

    if(!say) return message.reply("Usage: `yo cmd/command/info <command_from_bot>`, Aliases: command, info")

}

module.exports.help = {
    name: "cmd",
    aliases: ["command", "info"]
}