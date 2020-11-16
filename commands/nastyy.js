const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const settings = require('../settings.json');

const apiKey = settings.youtubeApi;
const prefix = settings.prefix;
var search = require('youtube-search');

const queues = require('../modules/queues.js');

exports.run = function(client, message, args){
    if(!message.guild) return;
    var author = message.author.username;
    var userID = message.author.id;
    
    const searchInput = message.content.split(' ').slice(1);
    let DEFAULT_VOLUME = 50;
    var CHANNEL = false;
    
    // One server, one unique queue
    const queue = getQueue(message.guild.id);

    function getQueue(server) {
      if (!queues[server]) queues[server] = [];
      return queues[server];
    }
    
    if (!message.member.voiceChannel)
      return message.channel.send('You need to be in a voice channel to use the command!');
    
    if (queue.length >= 20) {
      const embed = new Discord.RichEmbed()
      .setAuthor('Maximum Queue Size Reached!')
      .setDescription('The maximum queue size per server is 20 songs. If you want an unrestricted queue size, you can [donate](https://www.patreon.com/nastydiscordbot) and get the premium version of me!')
      message.channel.send({emebd: embed});
    }

    // Settings for the YouTube API
    var opts = {
        maxResults: 5,
        key: `${apiKey}`
    };
    
    // Main code to play music and managing queue
    function executeQueue(message, queue) {
        // If the queue is empty, finish.
        if (queue.length === 0) {
          message.channel.send('Music >> Queue Concluded');
          
          // Leave the voice channel.
          const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
          if (voiceConnection !== null) return voiceConnection.disconnect();
          message.member.voiceChannel.leave()
        }
  
        new Promise((resolve, reject) => {
          // Join the voice channel if not already in one.
          const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
          if (voiceConnection === null) {
            if (CHANNEL) {
              message.guild.channels.find('name', CHANNEL).join().then(connection => {
                resolve(connection);
              })
  
            // Check if the user is in a voice channel.
            } else if (message.member.voiceChannel) {
              message.member.voiceChannel.join().then(connection => {
                resolve(connection);
              })
            } else {
              // Otherwise, clear the queue and do nothing.
              queue.splice(0, queue.length);
              reject();
            }
          } else {
            resolve(voiceConnection);
          }
        }).then(connection => {
          // Get the first item in the queue.
          const video = queue[0];
          
          const play1 = new Discord.RichEmbed()
          .setColor(0x9370db)
          .setAuthor(`Now Playing: ${video.title}`, `${video.thumbnails}`)
          .addField('Some information about the song', `Channel Name - ${video.channelTitle} \n Song URL - [Click Here](${video.link}) \n Published At - ${publishedAt}`)
          .setFooter(`Ping : ${Math.round(message.client.ping)}ms `)
          .setThumbnail(video.thumbnails)
          .setTimestamp()
          // Play the video.
          message.channel.send({embed: play1}).then(() => {
            let dispatcher = connection.playStream(ytdl(video.link, {filter: 'audioonly'}), {seek: 0, volume: (DEFAULT_VOLUME/100)});
  
            connection.on('error', (error) => {
              // Skip to the next song.
              message.channel.send(`Error [<@${message.author.id}>] >> I ran into some error while searching, playing the next song in queue \n ${error}`)
              queue.shift();
              executeQueue(message, queue);
            });
  
            dispatcher.on('error', (error) => {
              // Skip to the next song.
              message.channel.send(`Error [<@${message.author.id}>] >> I ran into some error while trying to play the song, playing the next song in queue \n ${error}`)
              queue.shift();
              executeQueue(message, queue);
            });
  
            dispatcher.on('end', () => {
              // Wait a second.
              setTimeout(() => {
                if (queue.length > 0) {
                  // Remove the song from the queue.
                  queue.shift();
                  // Play the next song in the queue.
                  executeQueue(message, queue);
                }
              }, 1000);
            });
          })
        })
      }

    // Main code to search for the top 5 results of the input
    search(`${searchInput}`, opts, function(err, results) {
      if(err)
        return message.channel.send('Error: ' + err);
      
      var embedMessage = [];
      var num = 1;
      var videoUrl = [];
      var channelTitle1 = [];
      var queuedN = [];
      //console.log(results[0])
      
      for (var key in results) {
        embedMessage.push(`${num + ": "+results[key].title}`);
        queuedN.push(`${results[key].title}`)
        videoUrl.push(`${results[key].link}`)
        channelTitle1.push(`${results[key].channelTitle}`);
        num = num + 1;
      }

      const searchEmbed = new Discord.RichEmbed()
      .setAuthor('Youtube Search Results', 'http://www.freepngimg.com/download/youtube/6-2-youtube-png-picture.png')
      .addField('Showing top 5 results', `Query: ${searchInput.join(' ')} \n ${embedMessage.join('\n')}`)

      message.channel.send({embed: searchEmbed}).then(message => {
        const collector = message.channel.createMessageCollector(
          m => m.content.includes('1'),
          { time: 10000 }
        );

        collector.on('collect', m => {
          const embed = new Discord.RichEmbed()
          .setAuthor('Song selected. Pushing to queue')
          message.edit({embed: embed});
        });

        collector.on('end', collected => {
          if(collected.size === 0){
            message.channel.send(`<@${userID}> >> Command Cancelled due to timeout.`)
          } else {
            const embed = new Discord.RichEmbed()
            .setAuthor(`Song Queued: ${queuedN[0]}`)
            .setDescription('Sit back and relax while I load the track!')
            message.channel.send({embed: embed}).then(() => {
              console.log(results[0]);
              queue.push(results[0]);
              if(queue.length === 1) {
                executeQueue(message, queue);  
              }
            })
          }
        });
      });
    });
};