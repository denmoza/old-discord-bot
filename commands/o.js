const Discord = require('discord.js');
const client = new Discord.Client();

var mes = [`What a wonderful day!`, `It is great to have you back!`, `You rock!`];
exports.run = function(client, message) {
    message.channel.send(`Connecting...`);
    if (message.author.id === "204483358909136896"){
        message.channel.send(`Connected!`);
        const embed = new Discord.RichEmbed()
        .setColor(0x9370db)
        .setAuthor(`Owner Panel for N A S T Y`, `${message.author.avatarURL}`)
        .addField(`Welcome Back!`, `${mes[~~(Math.random() * mes.length)]}`)
        .addField(`Bot's Statistics`, `\n Ping: ${Math.round(message.client.ping)}ms \n Shard`)
        .addField(`Owner Commands`, `//eval - Eval things \n //dbots - Private command. \n //status - Set my status!`)
        .setFooter(`oo0oo0oo00000 next level thing right here`)
        .setTimestamp()
        message.channel.send({embed: embed});
    } else {
        message.reply(`sorry, you are not the bot's admin.`)
    }

};