const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{
    var help6 = new Discord.MessageEmbed()
        .setColor("#EECBFF")
        .setTitle("**• Help**")
        .addField("__m?clear__" , '\n• Avoir la permission de supprimé les messages\n• Précisé un chiffre entre 1 et 99\n• On ne peut pas supprimé les messages datant de plus de 2 semaines\n• Syntaxe : m?clear [1 - 99]')
        .setTimestamp()
        .setImage("https://tse1.mm.bing.net/th?id=OIP.28hzXnQyn696pYX6A5QTtwHaF7&pid=Api&P=0&w=205&h=165")

    message.channel.send(help6);
}

module.exports.help = {
    name: "m?help-clear"
}