const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{
    var help4 = new Discord.MessageEmbed()
    .setColor("#EECBFF")
    .setTitle("**• Help**")
    .addField("__m?stats__" , 'Vous indique toutes les infos et MAJ sur le bot')
    .setImage("https://tse1.mm.bing.net/th?id=OIP.28hzXnQyn696pYX6A5QTtwHaF7&pid=Api&P=0&w=205&h=165")
    .setTimestamp()

message.channel.send(help4);
}

module.exports.help = {
    name: "m?help-stats"
}