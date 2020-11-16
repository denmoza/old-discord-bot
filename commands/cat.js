const Discord = require('discord.js');
const client = new Discord.Client();
const http = require("http");

exports.run = function(client, message, args) {
    message.channel.startTyping();
    var options = {
        host: 'random.cat',
        path: '/meow'
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
            .setAuthor('Cute Catto!', `${message.author.avatarURL}`)
            .setImage(JSON.parse(data).file)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed});
            message.channel.stopTyping()
            return data;
        });
        
    });
    request.on('error', function (e) {
        throw err;
    });
    request.end();
};