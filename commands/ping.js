const Discord = require('discord.js');
const client = new Discord.Client();
//var shard = client.shard.id +1 ;
exports.run = function(client, message) {
    const ping = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(`:ping_pong: Ping! :ping_pong:`)
    .addField(`Average heartbeat ping of the websocket: ${Math.round(message.client.ping)}ms`, `Other ping ${(new Date().getTime() - message.createdTimestamp + " ms")}`)
    .setFooter(`I get pinged by ${message.author.username}`)
    message.channel.send({embed: ping});
  }