var Discord = require("discord.js");
var client = new Discord.Client();
const JIMP = require('jimp');

exports.run = function(client, message, args) {
/*
    Comamnd: //postcard <option> (user)
    Options: 
    christmas - like a merry christmas (user)!
    birthday - like happy birthday (user)! Hope you have a blast!
    idk - need more options

*/
    if (!message.guild) return;
    
    let userMention = message.mentions.members.first();

    //if (message.content === `n?postcard birthday ${userMention}`){
        message.channel.startTyping();
        let PFP = message.mentions.members.first().avatarURL;
        //PFP = PFP.replace(/.gif/g, ".png")
        let authorPHP = message.author.avatarURL;
        //authorPHP = authorPHP.replace(/.gif/g, ".png")

        JIMP.read('./pics/birthday-background.jpg').then((background) =>{
            JIMP.read(PFP).then((profile) => {
                JIMP.read(authorPHP).them((authorProfile) => {
                    profile.resize(435, 435);
                    authorPHP.resize(435, 435);

                    background.composite(profile, 550, 550);
                    background.composite(authorPHP, 660, 660);

                    JIMP.loadFont(JIMP.FONT_SANS_64_BLACK).then((font) => {
                        background.print(font, 450, 0, `Happy birthday!! From ${message.author.username}`);
                        
                        background.getBuffer(JIMP.MIME_PNG, (error, buffer) => {
                            //    Send it
                                message.channel.send("", {
                                    files: [{
                                        attachment: buffer,
                                        name: "happybirthday.png"
                                    }]
                                });
                
                                //    We can stop once we have sent the file
                                message.channel.stopTyping();
                            });
                    })
                })
            })
        });
    //} else {
    //    message.reply('no');
   // }
};  