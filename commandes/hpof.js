const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{
    var help11 = new Discord.MessageEmbed()
        .setColor("#EECBFF")
        .setTitle("**• Help**")
        .addField("__m?pof__" , 'Fait un pile ou face')
        .setTimestamp()
        .setImage("https://tse1.mm.bing.net/th?id=OIP.28hzXnQyn696pYX6A5QTtwHaF7&pid=Api&P=0&w=205&h=165")

    message.channel.send(help11);
}

module.exports.help = {
    name: "m?help-pof"
}