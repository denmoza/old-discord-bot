const Discord = require('discord.js');
const client = new Discord.Client();

const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');


var PREFIX = '//'

const queues = require('../modules/queues.js');

exports.run = function(client, message) {
    const broadcast = client.createVoiceBroadcast();

    if (message.member.voiceChannel) {        
        VoiceBroadcast.resume();
        message.channel.send(`Music Player is resumed by ${message.author.username}`);
    } else {
        message.reply('you are not in a Voice Channel');
    }
};