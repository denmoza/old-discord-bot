const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = function(client, message) {
  let totalMemberCount = 0;
  client.guilds.forEach(function(guild) { totalMemberCount += guild.memberCount });

  const embed = new Discord.RichEmbed()
  .setColor(0xA020F0)
  .setTimestamp()
  .setAuthor('N A S T Y | Info', `${client.user.avatarURL}`)
  .addField('Version', `3.0 BETA`, true)
  .addField('Prefix' , `//`, true)
  .addField('Help Command', `//help`, true)
  .addField('Uptime', `${[Math.floor((client.uptime / 1000) /60)]} minutes`, true)
  .addField('Memory Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/512 mb`, true)
  .addField('Memory Left', `${Math.floor((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) - 512)} mb`, true)
  .addField(`Server Count`, `${client.guilds.size}`, true)
  .addField('Users Online', `${client.users.size} /${totalMemberCount}`, true)
  .addField('Users Offline', `${[Math.floor(totalMemberCount - client.users.size)]}`, true)
  .setFooter(`Requested by ${message.author.username}`)
    
  return message.channel.send({embed: embed});
  }