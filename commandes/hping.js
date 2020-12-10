const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{
    var help5 = new Discord.MessageEmbed()
        .setColor("#EECBFF")
        .setTitle("**• Help**")
        .addField("__m?ping__" , 'Le bot vvous renvoie la balle avec un revert à effet')
        .setImage("https://tse1.mm.bing.net/th?id=OIP.28hzXnQyn696pYX6A5QTtwHaF7&pid=Api&P=0&w=205&h=165")
        .setTimestamp()

    message.channel.send(help5);
}

module.exports.help = {
    name: "m?help-ping"
}