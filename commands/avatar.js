const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function(client, message, args) {
  if(args.length === 0){
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(`${message.author.username}`, message.author.avatarURL)
    .setImage(message.author.avatarURL)
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp()
    message.channel.send({embed: embed});
  } else{
    let user = message.mentions.users.first();
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(`${user}`, user.avatarURL)
    .setImage(user.avatarURL)
    .setFooter(`Requested by ${message.author.username}`)
    .setTimestamp()
    message.channel.send({embed: embed});
  }
}