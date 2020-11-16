const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = guildCreate => {

const hello = new Discord.RichEmbed()
.setColor(0x8994a8)
.addField(`N A S T Y`, `A bot which can do more than just say hi!`)
.addField(`Hello! :wave:`, `Thanks for inviting me!`)
.addField(`Here is some information about myself`, `I am made for those who want to moderate, have fun, listen to music or customize that suits your server!`)
.addField(`"Great! Where can I start?`, "Start by typing the command `//help` for the help and the command list.")
.addField(`Useful Links`, `[Click here]() for the website(not live yet) & [Click here](https://discordapp.com/oauth2/authorize?client_id=295292566855876611&scope=bot&permissions=271584318) to invite **N A S T Y** Bot to your server!`)
.addField(`Shard ${shard}`, `I am now on ${client.guilds.size} servers!`)
.setThumbnail(`https://cdn.discordapp.com/avatars/295292566855876611/fbc6351e1f69a57deb34031ed58884fd.png?size=2048`)

const invite = new Discord.RichEmbed()
.setColor(0x8994a8)
.addField(`New Server!`, `Thanks for adding me! :heart:`)
.addField(`Server Name`, `${guild.name}`, true)
.addField(`Server Owner`, `${guild.owner} | ${guild.ownerID}`, true)
.addField(`Member Count`, `${guild.memberCount}`)
.addField(`Server Region`, `${guild.region}`)
.addField(`Status: `, `I am now in ${client.guilds.size} guilds!`)

const invite2 = new Discord.RichEmbed()
.setColor(0x8994a8)
.addField(`New Server!`, `Console Edition`)
.addField(`Server Name`, `${guild.name}`)
.addField(`Server Invite`, `[Click Here](${invite.url})`)

guild.defaultChannel.send(hello);

client.channels.get('327014842932396032').send(invite);
client.channels.get('335133335183687680').send(invite2);

};