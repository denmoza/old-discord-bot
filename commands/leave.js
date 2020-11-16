exports.run = function(client, message) {
  // Only try to join the sender's voice channel if they are in one themselves
  if (message.member.voiceChannel) {
    message.member.voiceChannel.leave()
  } else {
    message.reply('Before asking me to leave the voice channel \nJoin a voice channel. \n Logic? idk');
  }
}