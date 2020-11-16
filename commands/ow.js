const http = require("http");
const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = function(client, message, args) {
    const content = message.content.split(' ').slice(0);
    let mode, pc1, region;
    [mode, pc1, region] = content;
    
    if (!pc1) return message.reply('please enter your console [PC, etc]');
    if (!region) return message.reply("please enter your region [us, eu, kr]");
    if (!tag) return message.reply("please enter your battle tag [Name-12345]");

    tag = tag.replace("#","-");

    message.channel.startTyping();
    var options = {
        host: 'http://ow-api.herokuapp.com/',
        path: `/profile/${pc1}/${region}/${tag}`
    }
    var request = http.request(options, function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            const embed = new Discord.RichEmbed()
            .setColor(0xA020F0)
            .setTimestamp()
            .setAuthor(`Overwatch Profile for ${data.username}`, `${data.portrait}`)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed});
            message.channel.stopTyping()
            return data;
        });
        
    });
    request.on('error', function (e) {
        throw e;
    });
    request.end();
};