var Discord = require("discord.js");
var client = new Discord.Client();
const JIMP = require('jimp');


exports.run = function(client, message) {
    if (message.author.id !== "204483358909136896"){
        message.reply('testing testing, can you hear me? Testing 1 2 3. Loud and clear hoston.')
    } else {
        //    Let us tell the user we are creating their profile
        message.channel.startTyping();

        //    First we want to get the user's profile picture
        let PFP = message.author.avatarURL;
        PFP = PFP.replace(/.gif/g, ".png")

        //    Next we want to load the sexy h0t background
        //  Like the example you sent just now right?
        //    Background would be a picure, not the layout thing ayyyy

        JIMP.read('./res/background.png').then((background) => {
            //    Load the overlay (the thing with the boxes)
            JIMP.read('./res/overlay.png').then((overlay) => {
                //    Load their profile picture
            JIMP.read(PFP).then((profile) => {
                
                background.crop(
                (background.bitmap.width - overlay.bitmap.width)/2,
                (background.bitmap.height - overlay.bitmap.height)/2,
                overlay.bitmap.width,
                overlay.bitmap.height);

                //    Now we want to start layering them
                background.composite(overlay, 0, 0);

                //    PUT THE PFP ON
                profile.resize(435, 435);
                background.composite(profile, 0, 0);

                JIMP.loadFont(JIMP.FONT_SANS_64_BLACK).then((font) => {
                    //console.log(font);
                    background.print(font, 450, 0, message.author.tag); // print a message on an image
                
                    //    Get readable buffer
                    background.getBuffer(JIMP.MIME_PNG, (error, buffer) => {
                    //    Send it
                        message.channel.send("", {
                            files: [{
                                attachment: buffer,
                                name: "profile.png"
                            }]
                        });
        
                        //    We can stop once we have sent the file
                        message.channel.stopTyping();
                    });
                });

            });
            });
        });
    }
};