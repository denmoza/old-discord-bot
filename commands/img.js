const Discord = require('discord.js');
const client = new Discord.Client();
const GoogleImages = require('google-images');

const gclient = new GoogleImages('008564095683163697155:h8tpsnetdsi', 'AIzaSyDreBtGgwPO5oW47gaZpwNSfUfD90vwNeQ');

exports.run = function(client, message, args) {
/*    message.channel.startTyping();
    gclient.search(`${args}`)
    .then(images => {
        const embed = new Discord.RichEmbed()
        .setAuthor(`Google Image | ${args}`, `${message.avatarURL}`)
        .setImage(images.url)
        .setFooter(`Requested by ${message.author}`)
        message.channel.send({embed});
        /*
        [{
            "url": "http://steveangello.com/boss.jpg",
            "type": "image/jpeg",
            "width": 1024,
            "height": 768,
            "size": 102451,
            "thumbnail": {
                "url": "http://steveangello.com/thumbnail.jpg",
                "width": 512,
                "height": 512
            }
        }]
         
    });
    */
    // message.channel.stopTyping();

message.reply('oh you found a secret command! This command is coming soon, fixing some errors that we encountered.');
};