const warns = require("../warns.json");
const fs = require('fs');
const Discord = require('discord.js')
const client = new Discord.Client()

exports.run = function(client, message, args) {
    const mentioned = message.mentions.users.first();
    if (message.member.hasPermission('KICK_MEMBERS')){
      if (message.mentions.users.size != 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
          if (args.slice(1).length != 0) {
            const date = new Date().toUTCString();
            if (warns[message.guild.id] === undefined)
              warns[message.guild.id] = {};
            if (warns[message.guild.id][mentioned.id] === undefined)
              warns[message.guild.id][mentioned.id] = {};
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
              warns[message.guild.id][mentioned.id]["1"] = {"reason": args.slice(1).join(' '), time: date, user: message.author.id};
            } else {
              warns[message.guild.id][mentioned.id][warnumber+1] = {"reason": args.slice(1).join(' '),
                time: date,
                user: message.author.id};
            }
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
            message.channel.send(`Successfully warned ${mentioned.tag} for '${args.slice(1).join(' ')}'!`);
            const warn = new Discord.RichEmbed()
             .setColor(0xFF0000)
             .setTimestamp()
             .setAuthor(`New Case! | Warn`)
             .addField(`Moderator: `, `${message.author.username}`)
             .addField(`User: `, `<@${mentioned.tag}>`)
             .addField(`Reason: `, `${args.slice(1).join(' ')}`)
             return message.guild.channels.find("name", "logs").sendEmbed(embed);
          } else {
            message.channel.send("Correct Usage: //warn <user> <reason>");
          }
        } else {
          message.channel.send("Correct Usage: //warn <user> <reason>");
        }
      } else {
        message.channel.send("Correct Usage: //warn <user> <reason>");
      }
    } else {
      message.channel.send("Error: You do not have the permission (\'KICK_MEMBERS\') to give warnings.");
    }
    
};