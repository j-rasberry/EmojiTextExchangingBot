const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./bot.config.json');
var output = "";
client.once('ready', () => {
    console.log('Ready!');
});
client.login(config.token);
client.on('message', message => {
    console.log(message.content);
    prefixCheck = message.content.slice(0, 2);
    slicedInput = message.content.slice(2, message.content.length);
    console.log(prefixCheck);
    console.log(slicedInput);
    if (prefixCheck === config.prefix) {
        console.log("Prefix = true");
        if (message.content.startsWith("! ")) {
            message.delete();
        }
        for (var i = 0; i < slicedInput.length; i++) {
            var inputslice = slicedInput.slice(i, i + 1);
            OutputBuilder(inputslice)
        }
        if (output.length > 2000) {
            message.reply("Output length Exceeded 2000 Characters. Please Try again.").then(d_msg => {
                d_msg.delete(3000);
                output = "";
            });
        } else {
            message.channel.send(output);
            output = "";
        }
    }
});
function OutputBuilder(splice) {
    var inputSplice = splice.toLowerCase();
    if (inputSplice == " ") {
        output += ":clap:";
    } else if (inputSplice != " " || inputSplice != null) {
        output += ":regional_indicator_" + inputSplice + ": ";
    } else {
        output += inputSplice;
    }
    console.log(output);
};