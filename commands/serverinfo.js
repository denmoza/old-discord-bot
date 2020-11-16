const Discord = require('discord.js')
const client = new Discord.Client()

exports.run = function(client, message) {
    if (!message.guild) return;
    
    message.channel.startTyping();

    const humans = [message.guild.members.size - message.guild.members.filter(member=> member.user.bot).size]
    const bot = message.guild.members.filter(member=> member.user.bot).size;

    const channels1 = [message.guild.channels.filter(chan => chan.type === 'voice').size+message.guild.channels.filter(chan => chan.type === 'text').size];
    const count1 = message.guild.members.size;

    const info1 = new Discord.RichEmbed()
    .setThumbnail(`${message.guild.iconURL}`)
    .setAuthor(`Server Information | ${message.guild.name}`)
    .addField('Server Region', `${message.guild.region}`, true)
    .addField('Members', `${count1} members`, true)
    .addField('Created on', `${message.guild.createdAt}`)
    .addField(`Humans`, ` ${humans} humans are in this server`, true)
    .addField(`Bots`, `${bot} bots are in this server`, true)
    .addField(`Channels`, `There are ${channels1} channels in this server. \n Voice: ${message.guild.channels.filter(chan => chan.type === 'voice').size}\n Text: ${message.guild.channels.filter(chan => chan.type === 'text').size}`)
    .addField(`Roles`, message.guild.roles.map(role => role.name).join(', '))
    .setFooter(`Server Owner: ${message.guild.owner.displayName} | Requested by ${message.author.username}`)

    message.channel.send({embed: info1});

    message.channel.stopTyping();
};