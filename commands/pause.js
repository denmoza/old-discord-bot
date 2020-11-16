const Discord = require('discord.js');
const client = new Discord.Client();

const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');

exports.run = function(client, message) {
    const broadcast = client.createVoiceBroadcast();
    if (message.member.voiceChannel) {        
        broadcast.pause();
        message.channel.send(`Music Player is paused by ${message.author.username}`);
    } else {
        message.reply('you are not in a Voice Channel');
    }
};