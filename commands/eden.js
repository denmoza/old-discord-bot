const Discord = require('discord.js');
const client = new Discord.Client()
const ytdl = require('ytdl-core');

function playPlaylist(queue, i, connection, client) {
    let playlistTerminated = false;
    console.log(queue.length);
    console.log("i2 = " + i);
    if (i >= queue.length) { i = 0; }
    console.log("i = " + i);
    const dispatcher = connection.playStream(ytdl(queue[i], { filter: 'audioonly' }));
    dispatcher.on('end', () => {
      console.log("dispatched");
      if (playlistTerminated === true) return;
      playPlaylist(queue, i + 1, connection);
    });
    client.on('voiceStateUpdate', (oldMember, newMember) => {   
        if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
          if (connection.channel.members.size === 1) {
            playlistTerminated = true;
            dispatcher.end();
            connection.channel.leave();
          }
        }
      });
  }

exports.run = function(client, message){
  if (message.author.id !== "204483358909136896"){
    return;
  } else {
    const music = new Array()
    music[0] = 'https://www.youtube.com/watch?v=hcfgGnTlslo';
    music[1] = 'https://www.youtube.com/watch?v=rFrgyKmOUmc';
    music[2] = 'https://www.youtube.com/watch?v=IjZ75qI5BOk';
    music[3] = 'https://www.youtube.com/watch?v=tWHBaJHo5og';
    music[4] = 'https://www.youtube.com/watch?v=geZ_5Ri7ANg';
    music[5] = 'https://www.youtube.com/watch?v=YthChN1Wq8M';
      
    message.member.voiceChannel.join().then( connection => { message.channel.send("playing something"); playPlaylist(music, 0, connection, client); });
  }
};  
