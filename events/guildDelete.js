const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = guildDelete => {
  const invite = new Discord.RichEmbed()
  .setColor(0x8994a8)
  .addField(`I left a server`, `That server was boring anyways`)
  .addField(`Server Name`, `${guild.name}`, true)
  .addField(`Server Owner`, `${guild.owner} | ${guild.ownerID}`, true)
  .addField(`Status: `, `I am now in ${client.guilds.size} guilds!`)
  
  client.channels.get('327014842932396032').send(invite);
};