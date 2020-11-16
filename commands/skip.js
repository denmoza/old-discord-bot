const Discord = require('discord.js');
const client = new Discord.Client();

const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');


const queues = require('../modules/queues.js');

exports.run = function(client, message) {

    if (message.member.voiceChannel) {
        message.channel.send(`Skipping song...`).then(message => {
            message.member.voiceChannel.leave()
            message.edit(`Song Skipped :thumbsup:`);
            message.member.voiceChannel.leave()
        });
    } else {
        message.reply('Before asking me to leave the voice channel \nJoin a voice channel. \n Logic? idk');
    }

};