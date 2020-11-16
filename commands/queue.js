const Discord = require('discord.js');
const client = new Discord.Client();

const queues = require('../modules/queues.js');

exports.run = function(client, message) {

    const msg = message.content.trim();

    let DEFAULT_VOLUME = 50;
    let CHANNEL = false;

    function getQueue(server) {
         if (!queues[server]) queues[server] = [];
         return queues[server];
     }
    const queue = getQueue(message.guild.id);
     
    const text1 = queue.map((video, index) => {
        return (index === 0 ? "**Currently Playing**" : index === 1 ? "\n**Up Next**" : + "\n" + index+ 1) + ': ' + video.title + `  |  [${video.duration}]`
     });
    const play1 = new Discord.RichEmbed()
    .setColor(0x9370db  )
    .setTimestamp()
    .addField(`Current Queue for ${message.guild.name}:`, text1.join("\n"))
    .setFooter(`Ping : ${Math.round(message.client.ping)}ms`)
         
    message.channel.sendEmbed(play1);
};