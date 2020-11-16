const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setColor(0x9370db)
    .setAuthor(`Here is a meme for ya`, `${message.author.avatarURL}`)
    .setDescription()
    .setImage()
    .setTimestamp()

    message.channel.send({embed});
};