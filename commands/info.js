const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = function(client, message) {
    message.react('315009125694177281');

    const embed = new Discord.RichEmbed()
    .setColor(0xA020F0)
    .setAuthor('N A S T Y | Info', `${client.user.avatarURL}`)
    .addField('Version', `3.0 BETA`, true)
    .addField('Prefix' , `//`, true)
    .addField('Help Command', `//help`, true)
    .addField('Website' , `Coming Soon! Webpanel is also in the making!`)
    .addField('People who worked behind the scenes', `This is my owner, <@204483358909136896> \n\n This are my Developers that helped with the commands and the Webpanel, <@168827261682843648>, <@243203336084389889> <@265353078276882433> \n\n This are the people who gave me home for me to stay up 24/7! <@281073778207752197> and <@189131100889677825>`)
    .addField('Additional Links', `[Support server](https://discord.gg/z2tFS9A) | [Add me!](https://discordapp.com/oauth2/authorize?client_id=295292566855876611&scope=bot&permissions=271584318) | [Donate](https://www.patreon.com/nastydiscordbot) to keep my lights on!`)
    .setFooter(`© ItsJustNasty#2146 <204483358909136896>`)

    message.channel.send({embed: embed});
};