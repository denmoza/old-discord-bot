const Discord = require('discord.js');
const client = new Discord.Client();

var mes = [`What a wonderful day!`, `It is great to have you back!`, `You rock!`];
exports.run = function(client, message) {
    if (message.author.id === "204483358909136896" || message.author.id === "281073778207752197" || message.author.id === "189131100889677825" || message.author.id === "265071448182358018" || message.author.id === "168827261682843648"){
        message.channel.send(`Connecting...`).then(message => { 
            message.edit(`Connected!`);
            const embed = new Discord.RichEmbed()
            .setColor(0x9370db)
            .setAuthor(`Admin Panel for N A S T Y`, `${message.author.avatarURL}`)
            .addField(`Welcome Back!`, `${mes[~~(Math.random() * mes.length)]}`)
            .addField(`Bot's Statistics`, `\n Ping: ${Math.round(message.client.ping)}ms \n Shard`)
            .addField(`Admin Commands`, `//reload {command} - Reloads the command`)
            .setFooter(`oo0oo0oo00000 next level thing right here`)
            .setTimestamp()
            message.channel.send({embed});
        });
    } else {
        message.reply(`sorry, you are not the bot's admin.`)
    }
    


};