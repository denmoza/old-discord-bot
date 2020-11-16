const Discord = require('discord.js');
const client = new Discord.Client();

const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');

var PREFIX = 'n?'

const queues = require('../modules/queues.js');

exports.run = function(client, message, args) {
	if (!message.guild) return;

	const msg = message.content.trim();
	const command = msg.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
	const suffix = msg.substring(PREFIX.length + command.length).trim();
	const youtubeEmote = client.emojis.find('name', 'youtube');

	var text = message.content.split(" ").splice(1).join(" ");
	var searchstring = suffix

	let DEFAULT_VOLUME = 50
	let CHANNEL = false;

	if (!message.member.voiceChannel)
	return message.channel.send('You need to be in a voice channel to use the command!');

	if (!args) return message.reply('please enter a url or a search query for me to play!');
	const queue = getQueue(message.guild.id);

	if (queue.length >= 20) {
		return message.channel.send('Maximum queue size reached!');
	}

	function getQueue(server) {
		if (!queues[server]) queues[server] = [];
		return queues[server];
	}

	function isAdmin(member) {
		return member.hasPermission("ADMINISTRATOR")
	}

	function canSkip(member, queue) {
	if (ALLOW_ALL_SKIP) return true;
	else if (queue[0].requester === member.id) return true;
	else if (isAdmin(member)) return true;
	else return false;
	}

		function executeQueue(msg, queue) {
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
				.setAuthor(`Now Playing: ${video.title}`, `${video.thumbnail}`)
				.addField(`Duration`, `${video.duration}`, true)
				.addField(`URL`, `[Link](${video.webpage_url})`, true)
				.setFooter(`Ping : ${Math.round(message.client.ping)}ms `)
				.setThumbnail(video.thumbnail)
				.setTimestamp()
				// Play the video.
				message.channel.send({embed: play1}).then(() => {
					let dispatcher = connection.playStream(ytdl(video.webpage_url, {filter: 'audioonly'}), {seek: 0, volume: (DEFAULT_VOLUME/100)});

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
								executeQueue(msg, queue);
							}
						}, 1000);
					});
				})
			})
		}
		message.channel.startTyping();
		
		message.channel.send(`${youtubeEmote} Searching...`).then(message => {
		
			var searchstring = suffix;
			if (!suffix.toLowerCase().startsWith('http')){
				searchstring = 'gvsearch1:' + suffix;
			}
		
				YoutubeDL.getInfo(searchstring, ['-q', '--no-warnings', '--force-ipv4'], (err, info) => {
					if (err || info.format_id === undefined || info.format_id.startsWith('0')) {
						return message.channel.send({embed: invaild1});
					}
		
					//info.requester = message.author.id;
					
					const embed = new Discord.RichEmbed()
					.setColor(0x9370db)
					.setAuthor(`Song Queued: ${info.title}`, `${info.thumbnail}`)
					.addField(`Song Length: ${info.duration}`, `Ping: ${Math.round(message.client.ping)}ms`)
					.setFooter(`Awaiting YouTube...`)
					.setTimestamp()

					message.edit({embed: embed}).then(() => {
							queue.push(info);
							if (queue.length === 1) executeQueue(msg, queue);
							})
					})
		});
		
		message.channel.stopTyping();

		const invaild1 = new Discord.RichEmbed()
		.setColor(0xFF0000)
		.addField(`Error`, `There was an error while searching, please try again or report it to the Devs over at my place!`)
		.setFooter(`Error`)
		.setTimestamp()
  } 