const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{
    var help7 = new Discord.MessageEmbed()
        .setColor("#EECBFF")
        .setTitle("**• Help**")
        .addField("__m?ban__" , '\n• Avoir la permission de bannir les membres\n• Syntaxe m?ban [MENTION] [RAISON]')
        .setTimestamp()
        .setImage("https://tse1.mm.bing.net/th?id=OIP.28hzXnQyn696pYX6A5QTtwHaF7&pid=Api&P=0&w=205&h=165")

    message.channel.send(help7);
}

module.exports.help = {
    name: "m?help-ban"
}