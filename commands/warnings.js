const Discord = require('discord.js');
const client = new Discord.Client()

const warns = require("../warns.json");
const fs = require('fs');
exports.run = function(client, message, args) {
    const mentioned = message.mentions.users.first();
    if (message.member.hasPermission('KICK_MEMBERS')){
      if (message.mentions.users.size !== 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
          try {
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
              
              message.channel.send(mentioned.tag+" has no warnings.");
              return;
            }
          } catch (err) {
            message.channel.send(mentioned.tag+" has no warnings.");
            return;
          }
          let arr = [];

          for (var warn in warns[message.guild.id][mentioned.id]) {
            arr.push(`**${warn}:** "`+warns[message.guild.id][mentioned.id][warn].reason+
            "\" - "+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+" - "+warns[message.guild.id][mentioned.id][warn].time);

          }
           message.channel.send({embed: new Discord.RichEmbed()
            .setColor("#009900")
            .setAuthor("Warnings")
            .setTitle(`${mentioned.tag} has `+Object.keys(warns[message.guild.id][mentioned.id]).length+" warnings.")
            .setDescription(arr.join("\n"))
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`)
          });
        } else {
          message.channel.send("Correct Usage: //warnings <user>");
          console.log(args);
        }
      } else {
        message.channel.send("Correct Usage: //warnings <user>");
      }
    } else {
      message.channel.send("Error: You do not have the permission (\'KICK_MEMBERS\') to check warnings.");
    }

};