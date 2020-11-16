exports.run = function(client, message) {
    // Only try to join the sender's voice channel if they are in one themselves
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => { // Connection is an instance of VoiceConnection
        message.reply('Connected. Lets play some music!');
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
  }  
}