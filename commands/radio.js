const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function(client, message, args) {
  if (!message.guild) return;
    if (message.content === '//radio bbc1' || message.content === '//radio-bbc1'){
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                const dispatcher = connection.playStream('http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p');
                const embed = new Discord.RichEmbed()
                .setColor(0xA020F0)
                .setTimestamp()
                .setAuthor('You are now listening to BBC 1 [English]', `${message.author.avatarURL}`)
                .setFooter(`Requested by ${message.author.username}`)
                message.channel.send({embed: embed})
                client.on('voiceStateUpdate', (oldMember, newMember) => {   
                  if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                    if (connection.channel.members.size === 1) {
                      playlistTerminated = true;
                      dispatcher.end();
                      connection.channel.leave();
                      const embed1 = new Discord.RichEmbed()
                      .setColor(0xA020F0)
                      .setTimestamp()
                      .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                      message.channel.send({embed: embed1});
                    }
                  }
                });
              })
              .catch(console.log);
          } else {
            message.reply('Join a voice channel for me to play!');
          }
    } else if (message.content === '//radio bbc2' || message.content === '//radio-bbc2'){
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                const dispatcher = connection.playStream('http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio2_mf_p');
                const embed = new Discord.RichEmbed()
                .setColor(0xA020F0)
                .setTimestamp()
                .setAuthor('You are now listening to BBC 2 [English]', `${message.author.avatarURL}`)
                .setFooter(`Requested by ${message.author.username}`)
                message.channel.send({embed: embed})
                client.on('voiceStateUpdate', (oldMember, newMember) => {   
                  if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                    if (connection.channel.members.size === 1) {
                      playlistTerminated = true;
                      dispatcher.end();
                      connection.channel.leave();
                      const embed1 = new Discord.RichEmbed()
                      .setColor(0xA020F0)
                      .setTimestamp()
                      .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                      message.channel.send({embed: embed1});
                    }
                  }
                });
              })
              .catch(console.log);
          } else {
            message.reply('Join a voice channel for me to play!');
          }
    } else if (message.content === '//radio mofm' || message.content === '//radio-mofm'){
      if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
              const dispatcher = connection.playStream('https://streaming.radionomy.com/Mo-FMToday?cntUid=8d8df583-258a-4ca9-8630-0434d910287a&lang=en-GB%2cen-US%3bq%3d0.8%2cen%3bq%3d0.6&ad=radiono5&appName=website');
              const embed = new Discord.RichEmbed()
              .setColor(0xA020F0)
              .setTimestamp()
              .setAuthor('You are now listening to MoFm [English]', `${message.author.avatarURL}`)
              .setFooter(`Requested by ${message.author.username}`)
              message.channel.send({embed: embed})
              client.on('voiceStateUpdate', (oldMember, newMember) => {   
                if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                  if (connection.channel.members.size === 1) {
                    playlistTerminated = true;
                    dispatcher.end();
                    connection.channel.leave();
                    const embed1 = new Discord.RichEmbed()
                    .setColor(0xA020F0)
                    .setTimestamp()
                    .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                    message.channel.send({embed: embed1});
                  }
                }
              });
            })
            .catch(console.log);
        } else {
          message.reply('Join a voice channel for me to play!');
        }
   } else if (message.content === '//radio fallout' || message.content === '//radio-fallout'){
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playStream('http://46.101.243.245:8000/falloutfm1.ogg');
            const embed = new Discord.RichEmbed()
            .setColor(0xA020F0)
            .setTimestamp()
            .setAuthor('You are now listening to Fallout Radio [English]', `${message.author.avatarURL}`)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed})
            client.on('voiceStateUpdate', (oldMember, newMember) => {   
              if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                if (connection.channel.members.size === 1) {
                  playlistTerminated = true;
                  dispatcher.end();
                  connection.channel.leave();
                  const embed1 = new Discord.RichEmbed()
                  .setColor(0xA020F0)
                  .setTimestamp()
                  .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                  message.channel.send({embed: embed1});
                }
              }
            });
          })
          .catch(console.log);
      } else {
        message.reply('Join a voice channel for me to play!');
      }
 } else if (message.content === '//radio 538' || message.content === '//radio-538'){
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playStream('http://18973.live.streamtheworld.com/RADIO538.mp3');
            const embed = new Discord.RichEmbed()
            .setColor(0xA020F0)
            .setTimestamp()
            .setAuthor('You are now listening to Radio 538 [Dutch]', `${message.author.avatarURL}`)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed})
            client.on('voiceStateUpdate', (oldMember, newMember) => {   
              if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                if (connection.channel.members.size === 1) {
                  playlistTerminated = true;
                  dispatcher.end();
                  connection.channel.leave();
                  const embed1 = new Discord.RichEmbed()
                  .setColor(0xA020F0)
                  .setTimestamp()
                  .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                  message.channel.send({embed: embed1});
                }
              }
            });
          })
          .catch(console.log);
      } else {
        message.reply('Join a voice channel for me to play!');
      }
    } else if (message.content === '//radio 538 NonStop' || message.content === '//radio-538 NonStop'){
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playStream('http://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR09.mp3');
            const embed = new Discord.RichEmbed()
            .setColor(0xA020F0)
            .setTimestamp()
            .setAuthor('You are now listening to Radio 538 NonStop [Dutch]', `${message.author.avatarURL}`)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed})
            client.on('voiceStateUpdate', (oldMember, newMember) => {   
              if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                if (connection.channel.members.size === 1) {
                  playlistTerminated = true;
                  dispatcher.end();
                  connection.channel.leave();
                  const embed1 = new Discord.RichEmbed()
                  .setColor(0xA020F0)
                  .setTimestamp()
                  .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                  message.channel.send({embed: embed1});
                }
              }
            });
          })
          .catch(console.log);
      } else {
        message.reply('Join a voice channel for me to play!');
      }
    } else if (message.content === '//radio 538 nonstop' || message.content === '//radio-538 nonstop'){
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playStream('http://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR09.mp3');
            const embed = new Discord.RichEmbed()
            .setColor(0xA020F0)
            .setTimestamp()
            .setAuthor('You are now listening to Radio 538 NonStop [Dutch]', `${message.author.avatarURL}`)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed})
            client.on('voiceStateUpdate', (oldMember, newMember) => {   
              if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                if (connection.channel.members.size === 1) {
                  playlistTerminated = true;
                  dispatcher.end();
                  connection.channel.leave();
                  const embed1 = new Discord.RichEmbed()
                  .setColor(0xA020F0)
                  .setTimestamp()
                  .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                  message.channel.send({embed: embed1});
                }
              }
            });
          })
          .catch(console.log);
      } else {
        message.reply('Join a voice channel for me to play!');
      }
    } else if (message.content === '//radio 538 Party' || message.content === '//radio-538 Party'){
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playStream('http://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR16.mp3');
            const embed = new Discord.RichEmbed()
            .setColor(0xA020F0)
            .setTimestamp()
            .setAuthor('You are now listening to Radio 538 Party [Dutch]', `${message.author.avatarURL}`)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed})
            client.on('voiceStateUpdate', (oldMember, newMember) => {   
              if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                if (connection.channel.members.size === 1) {
                  playlistTerminated = true;
                  dispatcher.end();
                  connection.channel.leave();
                  const embed1 = new Discord.RichEmbed()
                  .setColor(0xA020F0)
                  .setTimestamp()
                  .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                  message.channel.send({embed: embed1});
                }
              }
            });
          })
          .catch(console.log);
      } else {
        message.reply('Join a voice channel for me to play!');
      }
    } else if (message.content === '//radio 538 Top40' || message.content === '//radio-538 Top40'){
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playStream('http://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR02.mp3%27');
            const embed = new Discord.RichEmbed()
            .setColor(0xA020F0)
            .setTimestamp()
            .setAuthor('You are now listening to Radio 538 Top 40 [Dutch]', `${message.author.avatarURL}`)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed})
            client.on('voiceStateUpdate', (oldMember, newMember) => {   
              if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                if (connection.channel.members.size === 1) {
                  playlistTerminated = true;
                  dispatcher.end();
                  connection.channel.leave();
                  const embed1 = new Discord.RichEmbed()
                  .setColor(0xA020F0)
                  .setTimestamp()
                  .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                  message.channel.send({embed: embed1});
                }
              }
            });
          })
          .catch(console.log);
      } else {
        message.reply('Join a voice channel for me to play!');
      }
    } else if (message.content === '//radio 3fm' || message.content === '//radio-3fm'){
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playStream('http://icecast.omroep.nl/3fm-bb-mp3');
            const embed = new Discord.RichEmbed()
            .setColor(0xA020F0)
            .setTimestamp()
            .setAuthor('You are now listening to Radio 3fm [Dutch]', `${message.author.avatarURL}`)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed})
            client.on('voiceStateUpdate', (oldMember, newMember) => {   
              if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                if (connection.channel.members.size === 1) {
                  playlistTerminated = true;
                  dispatcher.end();
                  connection.channel.leave();
                  const embed1 = new Discord.RichEmbed()
                  .setColor(0xA020F0)
                  .setTimestamp()
                  .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                  message.channel.send({embed: embed1});
                }
              }
            });
          })
          .catch(console.log);
      } else {
        message.reply('Join a voice channel for me to play!');
      }
    } else if (message.content === '//radio 3fm Serious' || message.content === '//radio-3fm Serious'){
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playStream('http://icecast.omroep.nl/3fm-serioustalent-mp3');
            const embed = new Discord.RichEmbed()
            .setColor(0xA020F0)
            .setTimestamp()
            .setAuthor('You are now listening to Radio 3fm Serious [Dutch]', `${message.author.avatarURL}`)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed})
            client.on('voiceStateUpdate', (oldMember, newMember) => {   
              if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                if (connection.channel.members.size === 1) {
                  playlistTerminated = true;
                  dispatcher.end();
                  connection.channel.leave();
                  const embed1 = new Discord.RichEmbed()
                  .setColor(0xA020F0)
                  .setTimestamp()
                  .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                  message.channel.send({embed: embed1});
                }
              }
            });
          })
          .catch(console.log);
      } else {
        message.reply('Join a voice channel for me to play!');
      }
    } else if (message.content === '//radio slamfm ' || message.content === '//radio-slamfm '){

      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playStream('http://stream.radiocorp.nl/web10_mp3');
            const embed = new Discord.RichEmbed()
            .setColor(0xA020F0)
            .setTimestamp()
            .setAuthor('You are now listening to Radio SlamFM [Dutch]', `${message.author.avatarURL}`)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send({embed: embed})
            client.on('voiceStateUpdate', (oldMember, newMember) => {   
              if (oldMember.voiceChannel !== undefined && newMember.voiceChannel === undefined) {
                if (connection.channel.members.size === 1) {
                  playlistTerminated = true;
                  dispatcher.end();
                  connection.channel.leave();
                  const embed1 = new Discord.RichEmbed()
                  .setColor(0xA020F0)
                  .setTimestamp()
                  .setAuthor(`Left VoiceChannel due to inactivity | <@${message.author.id}>`, `${message.author.avatarURL}`)
                  message.channel.send({embed: embed1});
                }
              }
            });
          })
          .catch(console.log);
      } else {
        message.reply('Join a voice channel for me to play!');
      }

    } else if (message.content === '//radio english' || message.content === '//radio-english'){

      const embed = new Discord.RichEmbed()
      .setColor(0xA020F0)
      .setTimestamp()
      .addField(':radio: English Help :radio:', "Here is the list of English radio stations.")
      .addField('Legend:', "[command] - The command \n <option> - Pick the given options. [Required]")
      .addField('BBC Radio Stations', '[//radio <bbc 1 || bbc 2>] - BBC Radio 1 is a British radio station operated by the British Broadcasting Corporation which also broadcasts internationally, specialising in modern and current popular music and chart hits throughout the day.')
      .addField('MoFm Radio Station', "[//radio mofm] - Today's Hottest Hits. [Click Here for Website](https://www.radionomy.com/en/radio/mo-fmtoday/index)")
      .addField('Fallout Radio Station', "[//radio fallout] - From the game 'Fallout', we got the main radio station in the house! Tune in for some fallout songs from the game!")
      .setFooter(`Requested by ${message.author.username}`)

      message.channel.send({embed: embed});
    } else if (message.content === '//radio dutch' || message.content === '//radio-dutch'){

      const embed2 = new Discord.RichEmbed()
      .setColor(0xA020F0)
      .setTimestamp()
      .addField(':radio: Dutch Help :radio:', "Here is the list of Dutch radio stations.")
      .addField('Legend:', "[command] - The command \n <option> - Pick the given options. [Required]")
      .addField('Radio 538', '[//radio 538] - Live naar Radio 538 luisteren! Luister hier direct naar Radio 538, het beste radiostation van Nederland.')
      .addField('Radio 538 NonStop', '[//radio 538 nonstop] - Geen zin in gepraat? Luister hier direct naar Radio 538 *NON-STOP*; het beste radiostation van Nederland')
      .addField('Radio 538 Party', '[//radio 538 Party] - Live naar Radio 538 luisteren! Luister hier direct naar Radio 538; het beste radiostation van Nederland.')
      .addField('Radio 3fm', '[//radio 3fm] - NPO 3fm is de plek voor de beste muziek en de coolste artiesten.')
      .addField('Radio 3fm serious', '[//radio 3fm Serious] - 3fm Serious altijd serieus!')
      .addField('Radio SlamFM', '[//radio slamfm] - SLAM! is HET station waar je de nieuwste tracks als eerste hoort!')
      .setFooter(`Requested by ${message.author.username}`)

      message.channel.send({embed: embed2});
    } else if (message.content === '//radio leave' || message.content === '//radio-leave') {

      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
        message.channel.send(`Thanks for tuning to N A S T Y Radio station, <@${message.author.ID}>! Want to keep N A S T Y 24/7? Consider [donating](https://www.patreon.com/nastydiscordbot) to keep the lights on!`)
      } else {
        message.reply('Before asking me to leave the Voice Channel, please join a voice channel.');
      }

    } else {

      const embed = new Discord.RichEmbed()
      .setColor(0xA020F0)
      .setTimestamp()
      .addField(':radio: Radio Help :radio:', "WHAT? RADIO IN DISCORD? NICEEE but how to use it?")
      .addField('Commands', `Main Command: //radio <station name> \n Sub Commands: \n //radio english [Shows the available radio stations (English)] \n //radio dutch [Shows the available radio stations (Dutch)] \n //radio leave [Stops the radio and leave the Voice Channel]`)
      .setFooter(`Requested by ${message.author.username}`)

      message.channel.send({embed: embed});
    }
}