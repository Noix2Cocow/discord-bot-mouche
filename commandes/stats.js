const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{
    
    var version = new Discord.MessageEmbed()
    .setColor("#EECBFF")
    .setTitle("**• Version et nouveautées**")
    .setAuthor("Moucheron Bot" , "https://i.imgur.com/EPujwXW.png")
    .setThumbnail("https://i.imgur.com/EPujwXW.png")
    .addField("__Version du bot__" , "V.1.0")
    .addField("__Nouveautées__" , "Aucun")
    .addField("__Serveur du créateur__" , "https://discord.gg/JEXWCvdUW6")
    .addField("__Pseudo du créateur__" , "<@348408904352268289>")
    .addField("__Date de la dernière MAJ__" , "7/12/2020")
    .addField("__Date de création__" , "24/11/2020")
    .setTimestamp()

message.channel.send(version);
}

module.exports.help = {
    name: "m?stats"
}