const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "comment",
  aliases: ['c'],
  description: "COMMENT!!",
  usage: "Comment",
  run: async (client, message, args) => {

        const comment = args.join('');
        if(!comment) return message.channel.send(`${bot.emotes.error} Provide something to Comment!`)
        try {    
        let yt = await canvacord.Canvas.youtube({"avatar":message.author.displayAvatarURL({format: "png"}),"username":message.author.username, "content":args.join(" ")})
        let attachment = new Discord.MessageAttachment(yt, 'comment.png')
        message.channel.send(attachment);
    }catch(err) {
        const embed2 = new Discord.MessageEmbed()
    .setTitle(`${bot.emotes.error} Something went wrong.\n${bot.emotes.error}Note : It won't work if the User contains Unwanted characters in his Username.`)
    .setColor(config.embedcolor);
    message.channel.send(embed2);
    }

    }
};