const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{

    var cand = new Discord.MessageEmbed()
    .setColor("#EECBFF")
    .setTitle("**< Candidature**")
    .setAuthor("Moucheron Bot" , "https://i.imgur.com/EPujwXW.png")
    .setThumbnail("https://i.imgur.com/EPujwXW.png")
    .addField("__Première étape__" , "Veuillez remplir le formulaire : https://forms.gle/pffdcCYjc986yPa77" , true)
    .addField("__Deuxième étape__" , "Notifier <@348408904352268289> en MP que vous l'avez rempli" , true)
    .setTimestamp()

    message.channel.send(cand)
}

module.exports.help = {
    name: "m?cand"
}